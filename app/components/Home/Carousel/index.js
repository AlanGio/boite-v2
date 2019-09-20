const React = require('react');
const { makeStyles, useTheme } = require('@material-ui/core/styles');
const MobileStepper = require('@material-ui/core/MobileStepper');
const Paper = require('@material-ui/core/Paper');
const Button = require('@material-ui/core/Button');
const KeyboardArrowLeft = require('@material-ui/icons/KeyboardArrowLeft');
const KeyboardArrowRight = require('@material-ui/icons/KeyboardArrowRight');
const lodash = require('lodash');

const SwipeableViews = require('react-swipeable-views');
const { autoPlay } = require('react-swipeable-views-utils');

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
	{
		title: 'Somos Boite',
		description: 'Completa nuestra encuesta personalizada de belleza',
		imgPath: '../../../assets/images/AdobeStock_284333412_Preview.jpg'
	},
	{
		title: 'Sé parte de la Boitemanía',
		description: 'Sumate!',
		imgPath: '../../../assets/images/AdobeStock_282970391_Preview.jpg'
	}
];

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	img: {
		overflow: 'hidden',
		display: 'block',
		width: '100%'
	}
}));

const Carousel = () => {
	const classes = useStyles();
	const theme = useTheme();
	const [ activeStep, setActiveStep ] = React.useState(0);
	const maxSteps = tutorialSteps.length;

	function handleNext() {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	}

	function handleBack() {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	}

	function handleStepChange(step) {
		setActiveStep(step);
	}

	return (
		<div className="carousel">
			<Paper square elevation={0} className="header">
				<h3>{tutorialSteps[activeStep].title}</h3>
				<p>{tutorialSteps[activeStep].description}</p>
			</Paper>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
				interval={1000000}
			>
				{tutorialSteps.map((step, index) => (
					<div key={step.label} key={lodash.uniqueId('step_')}>
						{Math.abs(activeStep - index) <= 2 ? (
							<img className={classes.img} src={step.imgPath} alt={step.title} />
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position="static"
				variant="text"
				activeStep={activeStep}
				className="footer"
				nextButton={
					<Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
						Siguiente
						{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
						Anterior
					</Button>
				}
			/>
		</div>
	);
};

module.exports = Carousel;
