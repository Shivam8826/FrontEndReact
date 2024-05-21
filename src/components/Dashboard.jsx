import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: '',
    imgPath:
    'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/ampere/wallpapers/rtx-3080/3080-wallpaper-Top.png'
  },
  {
    label: '',
    imgPath:
      'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    label: '',
    imgPath:
      'https://www.gizmochina.com/wp-content/uploads/2019/04/ROG-Swift-PG349Q-Monitor.jpg',
  },
  {
    label: '',
    imgPath:
      'https://www.wallpapertip.com/wmimgs/237-2375881_tech-wallpaper-for-android.jpg',
  },
  {
    label: '',
    imgPath:
      'https://storage-asset.msi.com/global/picture/image/feature/AIO/Monitor/MAG271CR/144bg.jpg',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'fit',

    alignItems: 'center',
    flexGrow: 1,
    marginLeft : 150,
    marginRight : 120
  },
 
  img: {
    height: 570,
    display: 'block',
    alignItems: 'center',
    maxWidth: 1900,
    width: '100%', 
    overflow: 'hidden',
  
    
  },
}));

function Dashboard() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
      
    </div>
  );
}

export default Dashboard;