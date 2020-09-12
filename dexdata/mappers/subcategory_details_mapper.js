const mapSubcategoryDetails = (subcategoryRow) => {

    return {
        category : subcategoryRow["category"],	
        name : subcategoryRow["subcategory"],
        slug: subcategoryRow["slug"]
    }
};

module.exports = mapSubcategoryDetails;