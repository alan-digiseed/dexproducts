import { combineDecorationsArrays } from '../utils/decorationsUtils';
import { getDeliveryTimeFrameDisplayText } from '../utils/deliveryTimeFrameUtils';

const applyQtyBasedLimit = (currentLimit, userDecorationDetail) => {
    let newLimit = currentLimit;
    if (userDecorationDetail.numChanges > 0 || userDecorationDetail.numNewSetups > 0 || userDecorationDetail.numRepeatSetups > 0) {
        newLimit = Math.min(userDecorationDetail.qtyLimited, currentLimit);
    }

    return newLimit;
}

const sumSetupCosts = (previousSum, userDecorationDetail) => {
    return previousSum + userDecorationDetail.numNewSetups * userDecorationDetail.newSetup + userDecorationDetail.numRepeatSetups * userDecorationDetail.repeatSetup;
}

const sumDecorationUnitCosts = (previousSum, userDecorationDetail) => previousSum + userDecorationDetail.numChanges * userDecorationDetail.unitPrice;

const calculateMaxQtyBasedOnQtyLimits = (userDecorationsDetails) => {
    return userDecorationsDetails.reduce( applyQtyBasedLimit ,1000000);
}

export const selectWholesalePricingTable = (state) => {
 
    if (state.currentPriceList) {
        let userDecorationDetails = combineDecorationsArrays(state.currentDecorationServices, state.userDecorations);

        var pricingTable = {
            maxQty: calculateMaxQtyBasedOnQtyLimits(userDecorationDetails),
            totalSetupCost: userDecorationDetails.reduce(sumSetupCosts, 0),
            decorationUnitCost: userDecorationDetails.reduce(sumDecorationUnitCosts, 0)            
        };
    
        pricingTable.volumeBasedPricing = state.currentPriceList.productPrices
            .filter((productPrice) => productPrice.qty <= pricingTable.maxQty )
            .map(productPrice => {
    
                let totalUnitPrice = productPrice.unitPrice + pricingTable.decorationUnitCost;
                let totalUnitPriceWithSetup = totalUnitPrice + (pricingTable.totalSetupCost / productPrice.qty);
    
                return {
                    qty: productPrice.qty,
                    unitPrice : state.includeSetupsInUnitPrice ? totalUnitPriceWithSetup : totalUnitPrice,
                    totalPrice : productPrice.qty * (state.includeSetupsInUnitPrice ? totalUnitPriceWithSetup : totalUnitPrice)
                }
            })
        
        return pricingTable;    
    }
}

export const selectRetailPricingTable = (state) => {
    if (state.currentPriceList) {
        let userDecorationDetails = combineDecorationsArrays(state.currentDecorationServices, state.userDecorations);

        var pricingTable = {
            maxQty: calculateMaxQtyBasedOnQtyLimits(userDecorationDetails),
            totalSetupCost: userDecorationDetails.reduce(sumSetupCosts, 0),
            decorationUnitCost: userDecorationDetails.reduce(sumDecorationUnitCosts, 0)
        };
    
        pricingTable.markedupTotalSetupCost = pricingTable.totalSetupCost * (1 + state.markupOnSetupPrice / 100);
    
        pricingTable.volumeBasedPricing = state.currentPriceList.productPrices
            .filter((productPrice) => productPrice.qty <= pricingTable.maxQty )
            .map(productPrice => {
    
                let markupPct = 0;
                let markupEntry = state.markups.find(m => m.qty === productPrice.qty);
                if (markupEntry) {
                    markupPct = markupEntry.markup / 100;
                }
                
    
                let totalUnitPrice = (productPrice.unitPrice + pricingTable.decorationUnitCost);
                let markedUpTotalUnitPrice = totalUnitPrice * ( 1+ markupPct);
    
                let totalUnitPriceWithSetup = totalUnitPrice + (pricingTable.totalSetupCost / productPrice.qty);
                let markedUpTotalUnitPriceWithSetup = totalUnitPriceWithSetup * ( 1+ markupPct);
    
                return {
                    qty: productPrice.qty,
                    unitPrice : state.includeSetupsInUnitPrice ? markedUpTotalUnitPriceWithSetup : markedUpTotalUnitPrice,
                    totalPrice : productPrice.qty * (state.includeSetupsInUnitPrice ? markedUpTotalUnitPriceWithSetup : markedUpTotalUnitPrice)
                }
            })
        
        return pricingTable;   
    }
}

export const selectAvailableTimeframes = (state) => {
    let availableTimeFrames = [];

    if (state.product) {
        availableTimeFrames = state.product.productPriceLists.reduce( (result, pl) => {
            let newResult = [...result, ...getTimeFramesForPriceList(pl)];
            return newResult;
        }, availableTimeFrames);   
    }
    
    return availableTimeFrames;
}

const getTimeFramesForPriceList = (priceList) => {
    let timeframeDays = [...new Set(priceList.decorations.map(d => d.days))];
    let availableTimeFrames = timeframeDays.map( tf =>{ return  { value: tf, caption: getDeliveryTimeFrameDisplayText(tf)} });

    return availableTimeFrames
}

const combinePriceLists = (product) => {
    return  {
        type: "combined",
        mindays: product.productPriceLists.map(pl => pl.minDays).reduce((prevValue, currValue) => Math.min(prevValue, currValue), 1000),
        maxdays: product.productPriceLists.map(pl => pl.maxDays).reduce((prevValue, currValue) => Math.max(prevValue, currValue), 0),
        decorations: [].concate(...product.productPriceLists.map(pl => pl.decorations))
    }
}

export const getPriceList = (days, product) => {

    if (days !== 0) {
        return product.productPriceLists.find(pl => pl.decorations.find( d => d.days === days));
    }
    else {
        return combinePriceLists(product);
    }
}