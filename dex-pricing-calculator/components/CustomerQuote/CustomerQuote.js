import React from 'react';
import {connect} from 'react-redux';
//import RenderAsImage from 'react-render-as-image'
import PricingChart from '../../components/PricingChart/PricingChart';
import PriceSummary from '../../components/PriceSummary/PriceSummary';
import classes from './CustomerQuote.module.css';

const CustomerQuote = (props) => (
    // <RenderAsImage format="png">
        <div className="customer-quote">
            <h4>{props.product.productCode} - {props.product.name}</h4>
            <div className="product-image float-left">
                <img alt={props.product.productCode} src={props.mainImage} />
            </div>
            <div className="clear-floats">
                <div className={classes.productDescription}>
                    {props.product.description}
                </div>
                <div className={classes.pricingChart}>
                    <PricingChart title="Unbranded" productPrices={props.productPrices}></PricingChart>
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
         userDecorations: state.userDecorations,
         product: state.product,
         mainImage: state.mainImage
     }
}

export default connect(mapStateToProps)(CustomerQuote);

