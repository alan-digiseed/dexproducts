import React from 'react';
import './PricingChart.module.css';
import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow  from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Typography } from '@material-ui/core';

const PricingChart = (props) => (
    <div>
        {
            props.productPrices != null &&     <div className="pricing-chart">
        
            {props.title && <Typography variant="h6" align="center">{props.title}</Typography>}

            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell><strong>Qty</strong></TableCell>
                        {props.productPrices.map((pl)=><TableCell key={"qty-" + pl.qty}>{pl.qty}</TableCell> )}
                    </TableRow> 
                    <TableRow>                    
                        <TableCell><strong>Unit Price ($)</strong></TableCell>
                        {props.productPrices.map((pl) => <TableCell key={"unitprice-" + pl.qty}>${pl.unitPrice}</TableCell>)}
                    </TableRow> 
                </TableBody>
            </Table>
        </div>   
        }
    </div>
);

const mapStateToProps = state => {
     return {
         productPrices: state.currentPriceList?.productPrices
     }
}

export default connect(mapStateToProps)(PricingChart);

