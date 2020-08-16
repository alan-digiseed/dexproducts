import React, {Component} from 'react';
import {connect} from 'react-redux';
import { selectAvailableTimeframes } from '../../store/calculator';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

class ServiceSelector extends Component {

    render() {
        return (
            <FormControl className="service-selector">
                <TextField id="select-service"
                select
                label="Choose Service:"
                value={this.props.deliveryTimeFrameDays}
                onChange={(event) => this.props.updateDeliveryTimeFrameDays(event.target.value)}
                variant="outlined"
                >
                    <MenuItem value="0">All Items</MenuItem>
                    {this.props.availableTimeFrames.map(tf => (<MenuItem key={tf.value} value={tf.value}>{tf.caption}</MenuItem>))}
                </TextField>
            </FormControl>            
        );
    }
}


const mapStateToProps = state => {
     return {
        deliveryTimeFrameDays: state.deliveryTimeFrameDays,
        availableTimeFrames:  selectAvailableTimeframes(state)
     }
}

const mapDispatchToProps = dispatch => {
    return {
        updateDeliveryTimeFrameDays: (newDeliveryTimeFrameDays) => dispatch({type: 'UPDATE_DELIVERY_TIME_FRAME_DAYS', payload: { deliveryTimeFrameDays: parseInt(newDeliveryTimeFrameDays)}})
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceSelector);
