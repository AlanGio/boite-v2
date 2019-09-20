const React = require('react');

const { Link } = require('react-router-dom');

const Paper = require('@material-ui/core/Paper');
const Grid = require('@material-ui/core/Grid');
const Container = require('@material-ui/core/Container');

const Button = require('@material-ui/core/Button');
const Carousel = require('./Carousel');

const Home = () => (
	<div className="page home">
		<div className="background">
			<Container maxWidth="lg">
				<Grid container spacing={0}>
					<Grid item md={6} />
					<Grid item md={6}>
						<h2>Sumate a Boite</h2>
						<h3>Suscribite y recibí nuestra caja de belleza personalizada todos los meses</h3>
						<Link to="/quiz/skin-color">
							<Button variant="contained" size="large" color="primary" className="button">
								Enterate como comenzar
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Container>
		</div>
		<div className="offer-boxes">
			<Container maxWidth="lg">
				<Grid container spacing={2}>
					<Grid item xs={12} md={4}>
						<Paper className="paper-item">
							<h4>Totalmente customizada</h4>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className="paper-item">
							<h4>Envio gratis a todo el país</h4>
						</Paper>
					</Grid>
					<Grid item xs={12} md={4}>
						<Paper className="paper-item">
							<h4>Cancelala cuando quieras</h4>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
		<div className="bottom-banner">
			<Grid container spacing={0}>
				<Grid item xs={12} md={12}>
					<Carousel />
				</Grid>
			</Grid>
		</div>
	</div>
);

module.exports = Home;
