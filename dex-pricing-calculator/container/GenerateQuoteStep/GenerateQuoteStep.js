import React from 'react';
import CustomerQuote from '../../components/CustomerQuote/CustomerQuote';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const GenerateQuoteStep = (props) => {
    return (
        <form className="generate-quote-step">
            <Typography variant="h6">Quotation</Typography>

            <Box>
                <Typography subtitle="true">.........................</Typography>
            </Box>

            <Box>
                <CustomerQuote></CustomerQuote>
            </Box>
        </form>
    );
}

//export default connect(null,mapDispatchToProps)(QuoteDetails);
export default GenerateQuoteStep;