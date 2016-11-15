import React from 'react';

import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

const HomeComponent = React.createClass({
	propTypes() {
		return {
			navigator: React.PropTypes.object.isRequired,
			store: React.PropTypes.object.isRequired
		};
	},
	getInitialState() {
		return {assortments: this.props.store.getState().assortments};
	},
	componentDidMount() {
		this.unsubscribeFromStore = this.props.store.subscribe(() => {
			this.setState({
				assortments: this.props.store.getState().assortments
			});
		});
		this.props.actionCreator.fetchAssortments();
	},
	componentWillUnmount() {
		this.unsubscribeFromStore();
	},
	handlePress() {
		this.props.navigator.replace({
			name: 'About'
		});
	},
	render() {
		const assortments = JSON.stringify(this.state.assortments);
		return (
			<TouchableHighlight onPress={this.handlePress}>
				<View>
					<View style={{marginTop: 50}}>
						<Text style={{fontSize: 20, fontWeight: 'bold'}}>Home component</Text>
					</View>
					<View>
						<Text>{assortments}</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}
});

export default HomeComponent;
