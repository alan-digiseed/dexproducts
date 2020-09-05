const mapPriceListServices = (productRow) => {
    const fillTemplate = function(templateString, templateVars){
        return new Function("return `"+templateString +"`;").call(templateVars);
    }

    const mapServiceNameToDays = (name) => {
        switch(name) {
            case "8 - 10 Weeks": return 70;
            case "24 Hours": return 1;
            case "3 Working Days": return 3;
            case "7 Working Days": return 7;
            case "9 Working Days": return 9;
            case "12 Working Days": return 12;
            case "15 Working Days": return 15;
            case "25 Working Days": return 25;
            case "28 Working Days": return 28;
            case "33 Working Days": return 33;
            case "35 Working Days": return 35;
            case "38 Working Days": return 38;
            default: throw `Unknown Service Name: ${name}`;
        }
    }
    
    let priceListTypes = [
        {
            name:"local",
            servicesStartIndex: 1,
            maxServices: 7,
            maxServiceTypes: 5,
        },
        {
            name: "offshore",
            servicesStartIndex: 8,
            maxServices: 3,
            maxServiceTypes: 4,
        }
    ];

    let fieldTemplates = {
        nameFieldTemplate: "Service${this.servicesIndex}",
        descriptionFieldTemplate: "Service${this.servicesIndex}Desc${this.serviceTypeIndex}",
        unitPriceFieldNamesTemplate: "Service${this.servicesIndex}Cost${this.serviceTypeIndex}",
        setupCostFieldNamesTemplate: "Service${this.servicesIndex}Setup${this.serviceTypeIndex}",
        moQFieldNamesTemplate: "Service${this.servicesIndex}MoQ${this.serviceTypeIndex}",
        maxQtyFieldNamesTemplate: "Service${this.servicesIndex}MaxQty${this.serviceTypeIndex}"
    };


    let services = Array();
    priceListTypes.forEach(plt => {
        for (servicesIndex = plt.servicesStartIndex; servicesIndex < plt.servicesStartIndex + plt.maxServices; servicesIndex++) {
            let nameField = fillTemplate(fieldTemplates.nameFieldTemplate, { servicesIndex: servicesIndex });
            for (serviceTypeIndex = 1; serviceTypeIndex <= plt.maxServiceTypes; serviceTypeIndex++) {
                if (productRow[nameField] && productRow[nameField] !== "") {               
                    let descriptionField = fillTemplate(fieldTemplates.descriptionFieldTemplate, { servicesIndex: servicesIndex, serviceTypeIndex: serviceTypeIndex });
                    let unitPriceField = fillTemplate(fieldTemplates.unitPriceFieldNamesTemplate, { servicesIndex: servicesIndex, serviceTypeIndex: serviceTypeIndex });
                    let setupCostField = fillTemplate(fieldTemplates.setupCostFieldNamesTemplate, { servicesIndex: servicesIndex, serviceTypeIndex: serviceTypeIndex });
                    let moQField = fillTemplate(fieldTemplates.moQFieldNamesTemplate, { servicesIndex: servicesIndex, serviceTypeIndex: serviceTypeIndex });
                    let maxQtyField = fillTemplate(fieldTemplates.maxQtyFieldNamesTemplate, { servicesIndex: servicesIndex, serviceTypeIndex: serviceTypeIndex });

                    if (productRow[descriptionField] && productRow[descriptionField] != "") {
                        let serviceEntry = {
                            priceListType: plt.name,
                            days: mapServiceNameToDays(productRow[nameField]), 
                            serviceType: productRow[descriptionField],
                            unitPrice: parseFloat(productRow[unitPriceField]), 
                            Setup: parseInt(productRow[setupCostField]),
                            minOrderQty: parseInt(productRow[moQField]),
                            maxOrderQty: parseInt(productRow[maxQtyField])            
                        };
                        
                        if (serviceEntry.days !== NaN 
                            && serviceEntry.unitPrice !== NaN
                            && serviceEntry.Setup !== NaN
                            && serviceEntry.minOrderQty !== NaN
                            && serviceEntry.maxOrderQty !== NaN) {
                                services.push(serviceEntry);
                            }
                    }
                }
            }
        }
    });

    return services;
}

module.exports = mapPriceListServices;