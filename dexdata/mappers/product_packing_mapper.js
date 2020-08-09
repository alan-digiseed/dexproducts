const mapProductPacking = (productRow) => {

    return {
        description: productRow["Packing"],
        cartonHeight: toFloatOrNull(productRow["CartonHeight"]),
        cartonWidth: toFloatOrNull(productRow["CartonWidth"]),
        cartonLength: toFloatOrNull(productRow["CartonLength"]),
        cartonQuantity: toFloatOrNull(productRow["CartonQuantity"]),
        cartonWeight: toFloatOrNull(productRow["CartonWeight"])
    }
};

const toFloatOrNull = (floatStr) => {
    if (!floatStr || floatStr === "")
        return null;
    else 
        return parseFloat(floatStr);
}

module.exports = mapProductPacking;