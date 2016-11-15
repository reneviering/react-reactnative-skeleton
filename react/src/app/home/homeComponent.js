import React from 'react';
import {http} from '../core/httpProvider';

const HomeComponent = React.createClass({
	componentDidMount() {
		http.get('http://localhost:8081/api/assortment', true).then(response => {
			console.warn(response);
		});
	},
	componentWillUnmount() {
		// dispose...
	},
	render() {
		return (
			<div>Welcome to the Hackathon!</div>
		);
	}
});

export default HomeComponent;
