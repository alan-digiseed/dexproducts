const fillTemplate = function(templateString, templateVars){
    return new Function("return `"+templateString +"`;").call(templateVars);
}

const mapPriceListBlanks = (productRow) => {

    let priceListTypes = [
        {
            name:"local",
            maxBlankSKUs: 3,
            nameFieldTemplate: "BlankPriceLocalDes${this.SKUIndex}",
            quantityFieldNamesTemplate: "QtyLocal${this.SKUIndex}_${this.QtyIndex}",
            priceFieldNamesTemplate: "PriceLocal${this.SKUIndex}_${this.QtyIndex}"
        },
        {
            name: "offshore",
            maxBlankSKUs: 2,
            nameFieldTemplate: "BlankPriceOSDes${this.SKUIndex}",
            quantityFieldNamesTemplate: "QtyOS${this.SKUIndex}_${this.QtyIndex}",
            priceFieldNamesTemplate: "PriceOS${this.SKUIndex}_${this.QtyIndex}"
        }
    ];

    let SKUs = Array();
    priceListTypes.forEach(plt => {
        for (SKUIndex = 1; SKUIndex <= plt.maxBlankSKUs; SKUIndex++) {
            let nameField = fillTemplate(plt.nameFieldTemplate, { SKUIndex: SKUIndex });
            if (productRow[nameField] && productRow[nameField] !== "") {               

                let prices = Array();
                for (QtyIndex = 1; QtyIndex <= 9; QtyIndex++) {
                    let quantityField = fillTemplate(plt.quantityFieldNamesTemplate, { SKUIndex: SKUIndex, QtyIndex: QtyIndex });
                    let priceField = fillTemplate(plt.priceFieldNamesTemplate, { SKUIndex: SKUIndex, QtyIndex: QtyIndex });
                    if (productRow[quantityField] && productRow[quantityField] != "") {
                        let priceEntry = {
                            qty: parseInt(productRow[quantityField]),
                            unitPrice: parseFloat(productRow[priceField])
                        }
                        
                        if (priceEntry.price !== NaN && priceEntry.qty !== NaN)
                            prices.push(priceEntry);
                    }
                }

                if (prices.length > 0) {
                    let SKU = {
                        type: plt.name,
                        description: productRow[nameField],
                        prices: prices
                    };
    
                    SKUs.push(SKU);                       
                }

            }

        }
    });

    return SKUs;
}

module.exports = mapPriceListBlanks;