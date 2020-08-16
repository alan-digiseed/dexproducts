
const mapProductParts = (productRow) => {
       
    let partsColumns = [
        {
            nameColumn: "ItemPart1",
            colorsColumn: "ColoursPart1",
            lengthColumn: "ItemLength1",
            heightColumn: "ItemHeight1",
            widthColumn: "ItemWidth1"
        },
        {
            nameColumn: "ItemPart2",
            colorsColumn: "ColoursPart2",
            lengthColumn: "ItemLength2",
            heightColumn: "ItemHeight2",
            widthColumn: "ItemWidth2"
        },
        {
            nameColumn: "ItemPart3",
            colorsColumn: "ColoursPart3",
            lengthColumn: "ItemLength3",
            heightColumn: "ItemHeight3",
            widthColumn: "ItemWidth3"
        }
    ];

    let partsKeys = partsColumns.map( c => c.nameColumn);

    return partsKeys.map(k => {

        let columns = partsColumns.find(c => c.nameColumn === k);
        if (!columns)
            return null;

        let partName = productRow[columns.nameColumn];
        let colors = productRow[columns.colorsColumn];
        let length = productRow[columns.lengthColumn];
        let height = productRow[columns.heightColumn];
        let width = productRow[columns.widthColumn];
        
        if (!partName) {
            if (!colors && !length && !height && !width)
                return null;
            else
                throw `${columns.nameColumn} requires part name. ProductCode: ${productRow["Code"]}`;
        }


        let result = {
            partName:  partName.toLowerCase() === "item" ? null : partName,
            colours: (colors  && colors != '') ? colors.split("|").map(i => i.trim()).filter(c => c && c !== "") : new Array(),
            length: length,
            width: width,
            height: height
        };

        return (result.partName || result.colours.length > 0) ? result : null;
    }).filter(k=>k);
};

module.exports = mapProductParts;