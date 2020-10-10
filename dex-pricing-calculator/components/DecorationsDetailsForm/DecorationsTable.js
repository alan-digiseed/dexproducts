import React from 'react';
import { connect } from 'react-redux';
import { getDeliveryTimeFrameDisplayText } from '../../utils/deliveryTimeFrameUtils';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './DecorationsDetailsForm.module.css'

const DecorationsTable = (props) => {

    return (        
    <div className="decorations-form">
        <p>lsdkjflkdsjflkjsdlkfj</p>
        {props.title && <Typography variant="h6" align="center">{props.title}</Typography>}


        <Grid container>
        <Grid item xs={9} className={styles.allServicesGrid}>
            <Table className={styles.allServicesTable}>
            <TableHead>
                <TableRow>
                <TableCell align="center">Decoration Service</TableCell>
                <TableCell align="center">Per Unit</TableCell>
                <TableCell align="center">New Setup Price</TableCell>
                <TableCell align="center">Repeat Setup Price</TableCell>
                <TableCell align="center">Qty Limited</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {props.decorationServices && props.decorationServices.map(row => {
                let key=getDeliveryTimeFrameDisplayText(row.days) + ' - ' + row.service;

                return (
                <TableRow key={key}>
                    <TableCell>{key}</TableCell>
                    <TableCell>{row.unitPrice}</TableCell>
                    <TableCell>{row.newSetup}</TableCell>
                    <TableCell>{row.repeatSetup}</TableCell>
                    <TableCell>{row.qtyLimited}</TableCell>
                </TableRow>
                )})}
            </TableBody>
            </Table>

        </Grid>
        <Grid item xs={3} className={styles.instructions}>
            Unit pricing varies depending on the service selected.<br/><br/> Please select a service to continue with your quote.
        </Grid>
        </Grid>

    </div>);
}

export default DecorationsTable;