import { getPriceList } from '../store/calculator';
import PricingCalculator from '../container/PricingCalculator/PricingCalculator';

const getInitialUserDecorations = (prod) => {
  let allDecorationServices = prod.productPriceLists.reduce((prevResult, currValue) => prevResult.concat(currValue.decorations) , []);
  let  decorationServiceNames = [...new Set(allDecorationServices.map(decorationService => decorationService.service))];  
  return decorationServiceNames.map(s => { 
    return {service: s, numChanges: 0, numNewSetups: 0, numRepeatSetups: 0};
  })
}


const initializeMarkups = (priceList, markups) => {  
  let result = [...markups];
  if (priceList) {
    priceList.productPrices.forEach( productPrice => {
      let qty = productPrice.qty;
      if (!result.find(markup => markup.qty === qty))
        result.push({qty: qty, markup: 0});
    });  
  }  
  return result.sort((a,b) => a.qty - b.qty);
}

const initialState = {
  initialized: false,
  deliveryTimeFrameDays: 0,
  includeSetupsInUnitPrice: false,
  markups: [],
  markupOnSetupPrice: 0,
  additionalInfo: 'Additional Info'
};
  
function PricingCalculatorReducer(state = initialState, action) {
  if (!action)
    return;
  switch (action.type) {
    case 'SET_PRODUCT': {
      state = {
        ...state,
        product: action.payload.product,
        userDecorations: getInitialUserDecorations(action.payload.product),
      }
      break;
    }
    case 'INITIALIZE': {
      state = {
        ...state,
        initialized: true
      }
      break;
    }
    case 'UPDATE_DELIVERY_TIME_FRAME_DAYS': {
      let currentPriceList = getPriceList(action.payload.deliveryTimeFrameDays, state.product);
      state = {
        ...state,
          deliveryTimeFrameDays: action.payload.deliveryTimeFrameDays,
          currentPriceList: currentPriceList
        };    
    
        break;
      }
  
      case 'UPDATE_MARKUP': {
        let markups = [...state.markups];
        let qty = action.payload.qty;
        let markup = action.payload.markup;

        let markupEntry = markups.find(me => me.qty === qty);
        if (markupEntry) {
          markupEntry.markup = markup;
          state = {
            ...state,
            markups: markups
          }
        }
        break;
      }
      case 'UPDATE_MARKUP_ON_SETUP_PRICE': {
        state = {
          ...state,
          markupOnSetupPrice: action.payload.markup
        }
        break;
      }
      case 'UPDATE_ADDITIONAL_INFO': {
        state = {
          ...state,        
          additionalInfo: action.payload.additionalInfo
        }
        break;
      }
      case 'UPDATE_DECORATION_QTY': {
        state = {
          ...state
        };

        console.log(action.payload);

        state.userDecorations = state.userDecorations.map( row => {
          if (row.service === action.payload.service) {
            return {
              ...row,
              numChanges: action.payload.fieldName === 'numChanges' ? parseInt(action.payload.value) : row.numChanges,
              numNewSetups: action.payload.fieldName === 'numNewSetups' ? parseInt(action.payload.value) : row.numNewSetups,
              numRepeatSetups: action.payload.fieldName === 'numRepeatSetups' ? parseInt(action.payload.value) : row.numRepeatSetups,
            }            
          }
          return row;
        });

        break;
      }
      case 'TOGGLE_INCLUDE_SETUP_IN_TOTAL_COSTS': {
        state = {
          ...state,
          includeSetupsInUnitPrice: !state.includeSetupsInUnitPrice
        };

        console.log(state.wholesalePriceSummary);
        break;
      }
      default: break;
    }

    //let currentPriceList = prod.productPriceLists.find(pl => pl.type === state.priceListType);
    if (state.currentPriceList != null) {
      state = updatestateBasedonCurrentPriceList(state.currentPriceList, state);
    }
    return state;
  };

  const updatestateBasedonCurrentPriceList = (priceList, state) => {

    let markups = state.markups; 
    
    state = {
      ...state,
      currentPriceList:  priceList,
      currentDecorationServices: priceList.decorations.filter(decoration => decoration.days === state.deliveryTimeFrameDays || state.deliveryTimeFrameDays === 0),
      markups: initializeMarkups(state.currentPriceList, markups)
    }

    return state;
  }

  export default PricingCalculatorReducer;