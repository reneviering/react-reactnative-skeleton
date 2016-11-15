import React from 'react';

const AboutComponent = React.createClass({
	getInitialState() {
		return {text: ''};
	},

	handleClick() {
		this.setState(Object.assign({}, this.state, {
			text: 'Ich wurde geklickt'
		}));
	},

	render() {
		return (
			<div onClick={this.handleClick}>About....</div>
		);
	}
});

export default AboutComponent;
