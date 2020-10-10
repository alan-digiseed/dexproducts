import React, { useState } from 'react';
import { connect } from 'react-redux';
import { combineDecorationsArrays } from '../../utils/decorationsUtils';
import { getDeliveryTimeFrameDisplayText } from '../../utils/deliveryTimeFrameUtils';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './DecorationsDetailsForm.module.css'

const DecorationsDetailsForm = (props) => {

  const [state, setState] = useState({
    ...props,
    userDecorations: props.userDecorations 
  }); 

  let decorationRows = combineDecorationsArrays(props.decorationServices, props.userDecorations); 


  const updateNumChangesinInternalState = (service, value) => {
    let copyState = {
      ...state,
      userDecorations: [...state.userDecorations]
    }

    let row = copyState.userDecorations.find(row => row.service === service);
    row.numChanges = value;

    setState(copyState);
  }

  const updateNumNewSetupsinInternalState = (service, value) => {
    let copyState = {
      ...state,
      userDecorations: [...state.userDecorations]
    }

    let row = copyState.userDecorations.find(row => row.service === service);
    row.numNewSetups = value;

    setState(copyState);
  }

  const updateNumRepeatSetupsinInternalState = (service, value) => {
    let copyState = {
      ...state,
      userDecorations: [...state.userDecorations]
    }

    let row = copyState.userDecorations.find(row => row.service === service);
    row.numRepeatSetups = value;

    setState(copyState);
  }

  return (
    <div className="decorations-form">
      {props.title && <Box style={{marginTop: 20}}><Typography variant="h6" align="center">{props.title}</Typography></Box>}

      <Table size="small">
        <TableHead >
          <TableRow>
            <TableCell align="center">Decoration Service</TableCell>
            <TableCell align="center">Per Unit</TableCell>
            <TableCell align="center">New Setup Price</TableCell>
            <TableCell align="center">Repeat Setup Price</TableCell>
            <TableCell align="center">Qty Limited</TableCell>
            <TableCell align="center">Number of Variations</TableCell>
            <TableCell align="center">New Setups</TableCell>
            <TableCell align="center">Repeat Setups</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {decorationRows && decorationRows.map(row => {
            let rowName = getDeliveryTimeFrameDisplayText(row.days) + ' - ' + row.service;

            return (
              <TableRow key={rowName}>
                <TableCell>{rowName}</TableCell>
                <TableCell>{row.unitPrice}</TableCell>
                <TableCell>{row.newSetup}</TableCell>
                <TableCell>{row.repeatSetup}</TableCell>
                <TableCell>{row.qtyLimited}</TableCell>
                <TableCell><input maxLength={3} size={3} value={row.numChanges} onChange={(event) => updateNumChangesinInternalState(row.service, event.target.value)} onBlur={(event) => props.updateDecorationQty(row.service, 'numChanges', event.target.value)} /> </TableCell>
                <TableCell><input maxLength={3} size={3} value={row.numNewSetups} onChange={(event) => updateNumNewSetupsinInternalState(row.service, event.target.value)} onBlur={(event) => props.updateDecorationQty(row.service, 'numNewSetups', event.target.value)} /></TableCell>
                <TableCell><input maxLength={3} size={3} value={row.numRepeatSetups} onChange={(event) => updateNumRepeatSetupsinInternalState(row.service, event.target.value)} onBlur={(event) => props.updateDecorationQty(row.service, 'numRepeatSetups', event.target.value)} /></TableCell>
              </TableRow>
            )
          }
          )}
        </TableBody>
      </Table>
    </div>);
  }

const mapStateToProps = state => {
  return {
    deliveryTimeframeDays: state.deliveryTimeFrameDays,
    userDecorations: state.userDecorations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateDecorationQty: (service, fieldName, value) => {
      dispatch({ type: 'UPDATE_DECORATION_QTY', payload: { service: service, fieldName: fieldName, value: value } })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecorationsDetailsForm);
