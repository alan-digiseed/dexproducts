
const mapPrintOptions = (productRow) => {

    let result = Array();
    for (i = 1; i <=8; i++) {
        if (productRow["PrintType" + i] && productRow["PrintType" + i] !== "") {
            result.push({
                printType: productRow["PrintType" + i],
                description: productRow["PrintDes" + i]
            })
        }
    }
    return result;
};

module.exports = mapPrintOptions;