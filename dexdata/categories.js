const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');
const mapPriceLists = require('./mappers/price_lists_mapper');
const mapPrintOptions = require('./mappers/print_options_mapper');
const mapProductDetails = require('./mappers/product_details_mapper');
const mapProductParts = require('./mappers/product_parts_mapper');
const mapProductPacking = require('./mappers/product_packing_mapper');
const mapCategoryDetails = require('./mappers/category_details_mapper');
const mapSubcategoryDetails = require('./mappers/subcategory_details_mapper');

const nestsubsubcategories = (subcategories, subcategoryRow) => {
    console.log('reducing...')
    console.log(JSON.stringify(subcategories))
    console.log(JSON.stringify(subcategoryRow))
    if (!subcategories) 
        subcategories = [];
    
    let subcategory = subcategories.find(sc => subcategoryRow.subcategory1 === sc.name);
    if (!subcategory) {
        subcategory = {
            name: subcategoryRow.subcategory1,
            slug: subcategoryRow.slug,
            subcategories: null
        };
        subcategories.push(subcategory);
    }

    if (subcategoryRow.subcategory2 && subcategoryRow.subcategory2 !== '') {
        if (!subcategory.subcategories)
            subcategory.subcategories = [];
            
        subcategory.subcategories.push(
            {
                name: subcategoryRow.subcategory2,
                slug: subcategoryRow.slug2
            });
    }
    return subcategories;
}


const sheetToObj = (filename, sheet) => {
    return new Promise(function (resolve, reject) {
        readXlsxFile(filename, { sheet: sheet }).then((data) => {
            // `rows` is an array of rows
            // each row being an array of cells.

            let columnNames = data[0];
            let rows = data.splice(1);

            let obj = rows.map(r => {
                let result = {};
                for (i = 0; i < columnNames.length; i++) {
                    let newProp = { [columnNames[i]]: r[i] };
                    result = { ...result, ...newProp };
                }

                return result;
            });

            resolve(obj);
        });
    });
}

let categories = [];

sheetToObj('data/dex-categories.xlsx', 2).then(categoryRows => {
    categoryRows.forEach(categoryRow => {

        try {
            let category = {
                ...mapCategoryDetails(categoryRow),
            }

            console.log(JSON.stringify(category))

            categories.push(category);
        }
        catch (error) {
            let message = `An error occured whilst processing ${productRow["Code"]}. Error: ${error}`;
            console.log(message);
        }
    })
});

let subcategories = [];

sheetToObj('data/dex-categories.xlsx', 1).then(subcategoryRows => {
    subcategoryRows.forEach(subcategoryRow => {

        try {
            let subcategory = {
                ...mapSubcategoryDetails(subcategoryRow),
            }

            subcategories.push(subcategory);
        }
        catch (error) {
            let message = `An error occured whilst processing ${productRow["Code"]}. Error: ${error}`;
            console.log(message);
        }
    });

    categories = categories.map(category => {
        return {
            ...category,
            subcategories: subcategories
                .filter(subcategory => subcategory.category === category.name)
                .reduce(nestsubsubcategories, null)
        }
    });


    categories.forEach(cat => {
        let fileName = `output/categories/${cat.slug}.json`.toLowerCase();
        fs.writeFileSync(fileName, JSON.stringify(cat));
    })

    // TODO: merge categories with the same alias.

});


