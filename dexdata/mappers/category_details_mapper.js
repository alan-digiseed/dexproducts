const mapCategoryDetails = (categoryRow) => {

    return {
        "name": categoryRow["name"],
        "slug": categoryRow["slug"],
        "title": categoryRow["name"],
        "alias": categoryRow["alias"],
        "imageUrl": categoryRow["image"]
    }
};

module.exports = mapCategoryDetails;