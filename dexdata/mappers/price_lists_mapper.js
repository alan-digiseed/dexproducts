const mapPriceListBlanks = require('./price_lists_blanks_mapper');
const mapPriceListServices = require('./price_lists_services_mapper');


const mapProductPriceLists = (productRow) => {

    let result = Array();

    let priceListTypes = [
        {
            name:"local",
        },
        {
            name: "offshore",
        }
    ];

    var blanks = mapPriceListBlanks(productRow);
    var services = mapPriceListServices(productRow)

    priceListTypes.forEach( plt => {

        var priceList = {
            type: plt.name,
            blanks: blanks.filter(b => b.type === plt.name),
            services: services.filter(s => s.priceListType === plt.name)
        }

        if (priceList.blanks.length > 0 || priceList.services.length > 0 )
            result.push(priceList);
    });




    return result;
};

module.exports = mapProductPriceLists;