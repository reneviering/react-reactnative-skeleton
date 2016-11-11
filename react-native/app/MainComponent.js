import React from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

const MainComponent = React.createClass({
	propTypes() {
		return {
			store: React.PropTypes.object.isRequired
		};
	},

	getInitialState() {
		return {text: ''};
	},

	componentDidMount() {
		this.props.store(result => {
			this.setState({text: result});
		});
	},

	handleOnPress() {
		this.setState({text: 'Ich habe geklickt'});
	},

	render() {
		return (
			<View>
				<TouchableHighlight blub="123" onPress={this.handleOnPress}>
					<View blubber="123">
						<Text key="test42">{this.state.text}</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
});

export default MainComponent;
