const mapToPricingCalculatorProduct = (prod) => {

    return {
        productCode: prod.productCode,
        name: prod.name,
        productPriceLists: prod.priceLists.map(pl => mapToPricingCalculatorPriceList(pl))    
    }
}

const mapToPricingCalculatorPriceList = (priceList) => {
    return {
        type: priceList.type,
        productPrices: priceList.blanks[0].prices, // TODO: handle multiple pricelists
        decorations: priceList.services.map(service => mapToPricingCalculatorDecoration(service))
    }
}

const mapToPricingCalculatorDecoration = (service) => {
    return {
        days: service.days,
        service: service.serviceType,
        unitPrice: service.unitPrice,
        newSetup: 50, //TODO: get newSetup cost from data
        repeatSetup: service.Setup,
        qtyLimited: service.maxOrderQty
        //TODO: Add minOrderQth
    }
}

export default mapToPricingCalculatorProduct;