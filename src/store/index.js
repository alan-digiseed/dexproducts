// src/js/store/index.js

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import PricingCalculatorReducer from "../../dex-pricing-calculator/store/reducer";

const store = () => {
    return createStore(PricingCalculatorReducer, composeWithDevTools( ));  
} 

export default store;