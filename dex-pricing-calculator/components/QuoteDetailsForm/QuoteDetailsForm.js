import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectWholesalePricingTable } from '../../store/calculator';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Box from '@material-ui/core/Box';


const getMarkup = (markups, qty) => {
    let markupItem = markups.find(m => m.qty === qty)
    return markupItem.markup;
}


const QuoteDetailsForm = (props) => {
    const [additionalInfo, setAdditionalInfo ] = useState(props.additionalInfo);

    if (!props.initialized)
        return null;

    return (
        <div>
            <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="left"></TableCell>
                    {props.retailPrices.volumeBasedPricing.map(pl => <TableCell key={"qty-" + pl.qty} align="left">{pl.qty}</TableCell>)}
                  </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell>Markup (%)</TableCell>
                            {props.retailPrices.volumeBasedPricing.map(pl => <TableCell key={"markuppct-"+pl.qty}><input type="number" style={{width:50}} value={getMarkup(props.markups, pl.qty)} onBlur={(evt) => props.updateMarkup(pl.qty, parseInt(evt.target.value))} onChange={(evt) => props.updateMarkup(pl.qty, parseInt(evt.target.value))}/></TableCell>)}
                        </TableRow>
                </TableBody>
            </Table>


            {!props.includeSetupsInUnitPrice &&
                <Box style={{marginTop: 20}}>
                    Markup on Setup: <input type="number" value={props.markupOnSetupPrice} onBlur={(evt) => props.updateMarkupOnSetupPrice(parseInt(evt.target.value))} onChange={(evt) => props.updateMarkupOnSetupPrice(parseInt(evt.target.value))}/>
                </Box>
            }
            
            <Box style={{marginTop: 20}}>
                Additional Information (to be displayed at bottom of quotation):<br />
                <textarea id="additionalinfo" name="additionalinfo" rows="5" cols="80" value={additionalInfo} onChange={(evt) => setAdditionalInfo(evt.target.value)} onBlur={(evt) => {setAdditionalInfo(evt.target.value); props.updateAdditionalInfo(evt.target.value)}}></textarea>
            </Box>                
        </div>
    );
}

const mapStateToProps = state => {
    return {
        initialized: state.initialized,
        includeSetupsInUnitPrice: state.includeSetupsInUnitPrice,
        retailPrices: selectWholesalePricingTable(state),
        markups: state.markups,
        markupOnSetupPrice:  state.markupOnSetupPrice,
        additionalInfo: state.additionalInfo
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        updateMarkup: (qty, markup) => dispatch({type: 'UPDATE_MARKUP', payload: {qty: qty, markup: markup}}),
        updateMarkupOnSetupPrice: (markup) => dispatch({type: 'UPDATE_MARKUP_ON_SETUP_PRICE', payload: {markup: markup}}),
        updateAdditionalInfo: (additionalInfo) => dispatch({type: 'UPDATE_ADDITIONAL_INFO', payload: { additionalInfo: additionalInfo}})
     }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(QuoteDetailsForm);