import React from 'react';
import QuoteDetailsForm from '../../components/QuoteDetailsForm/QuoteDetailsForm';
import PriceSummary from '../../components/PriceSummary/PriceSummary';
import Typography from '@material-ui/core/Typography';

const SetupMarkupsStep = (props) => {
    return (
        <form className="setup-markups-step">
            <Typography variant="h6">Enter Markup for each quantity break</Typography>

            <QuoteDetailsForm />
            <PriceSummary wholesale={false} displayIncludeSetupToggle={false}/>
        </form>
    );
}

//export default connect(null,mapDispatchToProps)(QuoteDetails);
export default SetupMarkupsStep;