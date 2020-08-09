const mapProductDetails = (productRow) => {

    return {
        productCode: productRow["Code"],
        name: productRow["Name"],
        category1: productRow["Category1"],
        category2: productRow["Category2"],
        category3: productRow["Category3"],
        category4: productRow["Category4"],
        category5: productRow["Category5"],
        category6: productRow["Category6"],
        description: productRow["Description"],
        additionalInfo: productRow["AdditionalInfo"],
        isOnSale: (productRow["IsOnSale"] ?? "").toLowerCase() === "y",
        isFreightFree: (productRow["IsFreightFree"] ?? "").toLowerCase() === "y",
        isOverseasSourcing: (productRow["IsOverSeasSourcing"] ?? "").toLowerCase() === "y",
        images: (productRow["ProductImageFile"] ?? "").split("|").map(i => i.trim()),
        productDisclaimer: productRow["ProductDisclaimer"]
    }
};

module.exports = mapProductDetails;