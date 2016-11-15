import React from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

const AboutComponent = React.createClass({
	propTypes() {
		return {
			navigator: React.PropTypes.string.isRequired
		};
	},

	handlePress() {
		this.props.navigator.replace({
			name: 'Home'
		});
	},
	render() {
		return (
			<TouchableHighlight onPress={this.handlePress}>
				<View style={{marginTop: 50}}>
					<Text>About component</Text>
				</View>
			</TouchableHighlight>
		);
	}
});

export default AboutComponent;
