import React from 'react';
import {
	Navigator
} from 'react-native';

import RouteConfiguration from '../routeConfiguration.js';

const store = {};
const actionCreator = {};

const MainComponent = React.createClass({
	renderScene(route, navigator) {
		return RouteConfiguration[route.name](this.props, navigator, route, store, actionCreator);
	},
	configureScene() {
		return Navigator.SceneConfigs.FadeAndroid;
	},
	render() {
		return (
			<Navigator initialRoute={{name: 'Home'}} renderScene={this.renderScene} configureScene={this.configureScene}/>
		);
	}
});

export default MainComponent;
