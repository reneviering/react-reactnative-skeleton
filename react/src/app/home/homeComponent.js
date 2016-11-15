import React from 'react';

const HomeComponent = React.createClass({
	propTypes() {
		return {store: React.PropTypes.required.object};
	},
	getInitialState() {
		return {assortments: this.props.store.getState().assortments};
	},
	componentDidMount() {
		this.unsubscribeFromStore = this.props.store.subscribe(() => {
			console.warn(this.state, this.props.store.getState().assortments.length);
			this.setState({
				assortments: this.props.store.getState().assortments
			});
		});
		this.props.actionCreator.fetchAssortments();
	},
	componentWillUnmount() {
		this.unsubscribeFromStore();
	},
	render() {
		const assortments = JSON.stringify(this.state.assortments);
		return (
			<div>
				<h1>Welcome to the Hackathon!</h1>
				<p>{assortments}</p>
			</div>
		);
	}
});

export default HomeComponent;
