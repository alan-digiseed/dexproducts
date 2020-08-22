import React from 'react';
import {connect} from 'react-redux';
//import RenderAsImage from 'react-render-as-image'
import PricingChart from '../../components/PricingChart/PricingChart';
import PriceSummary from '../../components/PriceSummary/PriceSummary';
import classes from './CustomerQuote.module.css';

const CustomerQuote = (props) => (
    // <RenderAsImage format="png">
        <div className="customer-quote">
            <h4>MTP027 – EUROAUZ MATT</h4>
            <div className="product-image float-left">
                <img alt="MTP027-EUROAUZ-MATT" src="http://dexproducts.wpengine.com/wp-content/uploads/2020/04/MTP027-EUROAUZ-MATT.png" />
            </div>
            <div className="clear-floats">
                <div className={classes.productDescription}>
                    Aluminium Stylish design pen with Shiny Silver Fittings in a Range of 4 Metallic colours, Click Action with Plastic Parker-Type Germany black ink Refill Supplied.<br/>
                    <br/>
                    With Genuine Copper Metal Tip
                </div>
                <div className={classes.pricingChart}>
                    <PricingChart title="Unbranded"></PricingChart>
                </div>
                <div className={classes.priceSummary}>
                    <PriceSummary title="Summary">  </PriceSummary>
                </div>
            </div>
        </div>            
    // </RenderAsImage>  
);

const mapStateToProps = state => {
     return {
         productPrices: state.currentPriceList.productPrices,
         userDecorations: state.userDecorations

     }
}

export default connect(mapStateToProps)(CustomerQuote);

