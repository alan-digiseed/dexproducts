import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SetupMarkupsStep from '../SetupMarkupsStep/SetupMarkupsStep';
import SelectServicesStep from '../SelectServicesStep/SelectServicesStep';
import GenerateQuoteStep from '../GenerateQuoteStep/GenerateQuoteStep';

//import StepWizard from 'react-step-wizard';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import SettingsIcon from '@material-ui/icons/Settings';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import DescriptionIcon from '@material-ui/icons/Description';
import StepConnector from '@material-ui/core/StepConnector';
import Box from '@material-ui/core/Box';


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#ccc',
    zIndex: 1,
    color: '#fff',
    width: 50,
    height: 50,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    backgroundImage:
      'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <MoneyIcon />,
    3: <DescriptionIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


function getSteps() {
  return ['Service Specifications', 'Customise Quotation', 'Generate Quote'];
}




const PricingCalculator = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    props.initalize();
  })

  if (props.initialized) {
    return <h1>loading...</h1>
  }

  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        'Cairo  ',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },  });

  return (
    <ThemeProvider theme={theme}>
    <div style={{border: '5px solid red', padding:15}} > 
      <Box>
        <Stepper activeStep={activeStep} orientation="horizontal" connector={<ColorlibConnector />}   >
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
            </Step>))}
        </Stepper>
      </Box>

      <Box style={{ padding: 15, marginTop: 20 }}>
        {activeStep === 0 && <SelectServicesStep></SelectServicesStep>}
        {activeStep === 1 && <SetupMarkupsStep></SetupMarkupsStep>}
        {activeStep === 2 && <GenerateQuoteStep></GenerateQuoteStep>}
      </Box>

      <Box style={{ padding: 15, marginTop: 20 }}>

        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
          >
            Back
                        </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </Box>

    </div>
    </ThemeProvider>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    initalize: () => {
      dispatch({ type: 'INITIALIZE' })
    }
  }
}


export default connect(null, mapDispatchToProps)(PricingCalculator);