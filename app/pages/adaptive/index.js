/**
 * Created by arey on 4/28/17.
 */
const React = require('react');
const { Component } = require('react');
const Home = require('../../components/Home');

class App extends Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	componentDidMount() {
		console.log('cargo...');
	}

	render() {
		return (
			<div className="index">
				<Home />
			</div>
		);
	}
}

module.exports = App;
