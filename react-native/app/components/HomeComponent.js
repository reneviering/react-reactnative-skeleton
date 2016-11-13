import React from 'react';

import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

const HomeComponent = React.createClass({
	propTypes() {
		return {
			navigator: React.PropTypes.object.isRequired
		};
	},
	handlePress() {
		this.props.navigator.replace({
			name: 'About'
		});
	},
	render() {
		return (
			<TouchableHighlight onPress={this.handlePress}>
				<View style={{marginTop: 50}}>
					<Text>Home component</Text>
				</View>
			</TouchableHighlight>
		);
	}
});

export default HomeComponent;
