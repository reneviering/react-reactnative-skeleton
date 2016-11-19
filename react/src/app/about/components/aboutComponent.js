import React from 'react';

const AboutComponent = React.createClass({
	getInitialState() {
		return {text: 'Initial text.'};
	},

	handleClick() {
		this.setState(Object.assign({}, this.state, {
			text: 'I has been clicked.'
		}));
	},

	render() {
		return (
			<div onClick={this.handleClick}>{this.state.text}</div>
		);
	}
});

export default AboutComponent;
