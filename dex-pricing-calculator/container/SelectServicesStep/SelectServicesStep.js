import React, { Component } from 'react';
import { connect } from 'react-redux';

import ServiceSelector from '../../components/ServiceSelector/ServiceSelector';
import PricingChart from '../../components/PricingChart/PricingChart';
import DecorationsDetailsForm from '../../components/DecorationsDetailsForm/DecorationsDetailsForm';
import DecorationsTable from '../../components/DecorationsDetailsForm/DecorationsTable';
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
                <br />
                <Typography variant="h6">Step 1. Select Service (Delivery Time)</Typography>
                <br />

                <Box style={{ marginTop: 20 }}>
                    <ServiceSelector />
                </Box>

                {priceLists && priceLists.map(pl => (
                    <div>
                        {pl.type}
                        <Box style={{ marginTop: 20 }}>
                            <PricingChart title={this.props.currentPriceList ? "Unbranded" : null} productPrices={pl.productPrices}></PricingChart>
                        </Box>
                        <Box>
                            {this.props.deliveryTimeFrameDays !== 0 && <DecorationsDetailsForm title={this.props.currentPriceList ? "Decorations" : null} decorationServices={pl.decorations.filter(dec => dec.days == this.props.deliveryTimeFrameDays)}/> }
                            {this.props.deliveryTimeFrameDays === 0 && <DecorationsTable decorationServices={pl.decorations}/> }
                        </Box>
                        <Box style={{ marginTop: 20 }}>
                            <PriceSummary wholesale={true} displayIncludeSetupToggle={true} />
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
        deliveryTimeFrameDays: state.deliveryTimeFrameDays,
        product: state.product,
    }
}

export default connect(mapStateToProps)(SelectServicesStep);
