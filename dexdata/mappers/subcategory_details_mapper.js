const mapSubcategoryDetails = (subcategoryRow) => {

    return {
        category : subcategoryRow["category"],	
        subcategory1 : subcategoryRow["subcategory-1"],
        subcategory2 : subcategoryRow["subcategory-2"],
        slug: subcategoryRow["slug"],
        slug2: subcategoryRow["slug-2"]
    }
};

module.exports = mapSubcategoryDetails;