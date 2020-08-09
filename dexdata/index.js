const readXlsxFile = require('read-excel-file/node');
const fs = require('fs');
const mapPriceLists = require('./mappers/price_lists_mapper');
const mapPrintOptions = require('./mappers/print_options_mapper');
const mapProductDetails = require('./mappers/product_details_mapper');
const mapProductParts = require('./mappers/product_parts_mapper');
const mapProductPacking = require('./mappers/product_packing_mapper');


const sheetToObj = (filename, sheet) => {
    return new Promise(function (resolve, reject) {
        readXlsxFile(filename, {sheet: sheet}).then((data) => {
            // `rows` is an array of rows
            // each row being an array of cells.
        
            let columnNames = data[0];
            let rows = data.splice(1);
        
            let obj = rows.map(r => {
                let result = {};
                for (i = 0; i < columnNames.length; i++) {           
                    let newProp = {[columnNames[i]]: r[i]};
                    result = {...result, ...newProp};
                }
        
                return result;
            });

            resolve(obj);
        });
    });
}


sheetToObj('data/Dex Group Database -2.xlsx', 1).then( productRows => {
    productRows.forEach(productRow => {

        try {
            let product = {
                ...mapProductDetails(productRow),
                parts: [...mapProductParts(productRow)],
                printOptions: [...mapPrintOptions(productRow)],
                priceLists: [...mapPriceLists(productRow)],
                packing: {...mapProductPacking(productRow)}
            }

            let fileName = `output/product-${product.productCode}.json`.toLowerCase();
            fs.writeFileSync(fileName, JSON.stringify(product));     
        }
        catch (error)
        {
            let message = `An error occured whilst processing ${productRow["Code"]}. Error: ${error}`;
            console.log(message);
        }                
    }) 
    
});


// TO DISCUSS:
// Multiple Part Items... Can we change the column Item Part 1; Item Part 2 and Item Part 3 to be the name of the item.
// This means that color part 1, color part 2 and color part 3 no longer include the name of the part as this is pulled from the other field - and this is used for both color and size.



