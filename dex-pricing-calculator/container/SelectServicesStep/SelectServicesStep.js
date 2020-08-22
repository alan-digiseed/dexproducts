import React, { Component } from 'react';

import ServiceSelector from '../../components/ServiceSelector/ServiceSelector';
import PricingChart from '../../components/PricingChart/PricingChart';
import DecorationsDetailsForm from '../../components/DecorationsDetailsForm/DecorationsDetailsForm';
import PriceSummary from '../../components/PriceSummary/PriceSummary';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class SelectServicesStep extends Component {

    render() {
        return (
            <form className="select-services-step">
                            
                    <Typography> Select your required delivery time frame from the select service dropdown.  Then select the decorations you require. </Typography>
                

                <br/>
                <Typography variant="h6">Step 1. Select Service (Delivery Time)</Typography>

<br/>

                <Box style={{marginTop: 20}}>
                    <ServiceSelector />
                </Box>

                <Box style={{marginTop: 20}}>
                    <PricingChart title="Unbranded"></PricingChart>
                </Box>
                
                <Box style={{marginTop: 20}}>
                    <DecorationsDetailsForm title="Decorations" />
                </Box>
                <Box style={{marginTop: 20}}>
                    <PriceSummary wholesale={true} displayIncludeSetupToggle={true}/>
                </Box>

            </form>
        );
    }
}

export default SelectServicesStep;