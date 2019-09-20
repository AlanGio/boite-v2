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

const Pepe = () => <div>pepe</div>;

module.exports = Pepe;
