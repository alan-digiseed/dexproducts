import React from 'react';
import './PriceSummary.module.css';
import { Toggle } from "react-toggle-component";
import { connect } from 'react-redux';
import { getDeliveryTimeFrameDisplayText} from '../../utils/deliveryTimeFrameUtils';
import { selectWholesalePricingTable, selectRetailPricingTable } from '../../store/calculator';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow  from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const PriceSummary = (props) => {

    let unitPriceHeading = getDeliveryTimeFrameDisplayText(props.deliveryTimeFrameDays) + ' ' + (props.includeSetupsInUnitPrice ? 'unit price including setup' : 'unit price without setup');
    let totalPriceHeading = getDeliveryTimeFrameDisplayText(props.deliveryTimeFrameDays) + ' ' + (props.includeSetupsInUnitPrice ? 'total buy price including setup' : 'total buy price without setup');
    let chartTitle = props.includeSetupsInUnitPrice ? 'Price Summary (Amortised Setup Costs)' : 'Price Summary (Setup Costs Separately)';
    
    let prices = props.wholesale ? props.wholesalePrices : props.retailPrices; 

    if (props.deliveryTimeFrameDays === 0)
        return null;

return (
    <div>
        {props.displayIncludeSetupToggle &&
            <div className="ammortizedSetupCostSelector">
                <label htmlFor="toggle-1">
                    Include Setups In Unit Price
                        <Toggle
                            name="toggle-1" checked={props.includeSetupsInUnitPrice}
                            onToggle={props.toggleIncludeSetupsInUnitPrice}
                        />
                </label>
            </div>
        }

        <div className="price-summary" style={{marginTop: 20}}>
            <Typography variant="h6" align="center">{chartTitle}</Typography>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Quantity</TableCell>
                        {prices.volumeBasedPricing.map(priceLevel => <th key={"qty-" + priceLevel.qty}>{priceLevel.qty}</th>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>{unitPriceHeading}</TableCell>
                        {prices.volumeBasedPricing.map(priceLevel => <TableCell key={"unitprice-" + priceLevel.qty}>{priceLevel.unitPrice.toFixed(2)}</TableCell>)}
                    </TableRow>
                    <TableRow>
                        <TableCell>{totalPriceHeading}</TableCell>
                        {prices.volumeBasedPricing.map(priceLevel => <TableCell key={"totalprice-" + priceLevel.qty}>{priceLevel.totalPrice.toFixed(2)}</TableCell>)}
                    </TableRow>
                </TableBody>
            </Table>

            {!props.includeSetupsInUnitPrice &&
                <Box style={{marginTop: 20}}>
                    <div>
                        Total Setup: {props.wholesale ? prices.totalSetupCost : prices.markedupTotalSetupCost}
                    </div>
                </Box>
            }
        </div>

    </div>);

}

const mapDispatchToProperties = dispatch => {
    return {
        toggleIncludeSetupsInUnitPrice: () => dispatch({type: 'TOGGLE_INCLUDE_SETUP_IN_TOTAL_COSTS'})
    }
}

const mapStateToProps = state => {
    return {
        includeSetupsInUnitPrice: state.includeSetupsInUnitPrice,
        deliveryTimeFrameDays: state.deliveryTimeFrameDays,
        wholesalePrices: selectWholesalePricingTable(state),
        retailPrices: selectRetailPricingTable(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProperties)(PriceSummary);

