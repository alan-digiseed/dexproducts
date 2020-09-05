import React, { Component } from 'react';
import {connect} from 'react-redux';

import ServiceSelector from '../../components/ServiceSelector/ServiceSelector';
import PricingChart from '../../components/PricingChart/PricingChart';
import DecorationsDetailsForm from '../../components/DecorationsDetailsForm/DecorationsDetailsForm';
import PriceSummary from '../../components/PriceSummary/PriceSummary';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class SelectServicesStep extends Component {

    render() {

        let priceLists = [];
        if (this.props.currentPriceList)
            priceLists = [this.props.currentPriceList];
        else
            priceLists = this.props.product.productPriceLists;

        return (
            <form className="select-services-step">
                
                <Typography> Select your required delivery time frame from the select service dropdown.  Then select the decorations you require. </Typography>
                 <br/>
                 <Typography variant="h6">Step 1. Select Service (Delivery Time)</Typography>
                 <br/>
                 
                 <Box style={{marginTop: 20}}>
                     <ServiceSelector />
                 </Box>

                {priceLists && priceLists.map(pl =>  (
                    <div>
                        <Box style={{marginTop: 20}}>
                            <PricingChart title={this.props.currentPriceList ? "Unbranded" : null} productPrices={pl.productPrices}></PricingChart>
                        </Box>                
                        <Box>
                            <DecorationsDetailsForm title={this.props.currentPriceList ? "Decorations" : null} decorationServices={pl.decorations} />
                        </Box>
                        <Box style={{marginTop: 20}}>
                            <PriceSummary wholesale={true} displayIncludeSetupToggle={true}/>
                        </Box>
                    </div>))
                }



            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        currentPriceList: state.currentPriceList,
        product: state.product,
    }
}

export default connect(mapStateToProps)(SelectServicesStep);
