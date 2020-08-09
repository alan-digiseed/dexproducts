
const mapProductParts = (productRow) => {
       
        let partsKeys = ["ColoursPart1", "ColoursPart2", "ColoursPart3"];
        let numKeys = partsKeys.reduce((accumulator, key) => (productRow[key] ? ++accumulator : accumulator), 0);
        
        if (numKeys === 0)
            return [];
        else if (numKeys === 1)
            return partsKeys.map(k => {
                if (productRow[k] == null)
                    return null;

                let result = {
                    partName: "",
                    colours: productRow[k].split("|").map(i => i.trim()).filter(c => c && c !== "")
                };

                return result.colours.length > 0 ? result : null;
            }).filter(k=>k);
        else
        {
            return partsKeys.map(k => {
                if (productRow[k] !== "" && productRow[k].indexOf(":")<0)
                    throw `no partname specifed in multi-part product - Expected Format ${k} = <partname>: colour1 | colour2 ... | colour n`;


                let partName = productRow[k].slice(0,productRow[k].indexOf(":"));
                let colours = productRow[k].slice(productRow[k].indexOf(":") + 1);

                let result = {
                    partName: partName,
                    colours: colours.split("|").map(i => i.trim()).filter(c => c !== "")
                };

               
                return result.colours.length > 0 ? result : null;
            }).filter(k=>k);
        }            
};

module.exports = mapProductParts;