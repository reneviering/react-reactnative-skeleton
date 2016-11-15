import React from 'react';
import {
	Navigator
} from 'react-native';
import {createStore} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {createActionCreator} from '../actions/createActionCreator';

import RouteConfiguration from '../routeConfiguration.js';

// Initialize redux
const store = createStore(rootReducer);
const actionCreator = createActionCreator(store);

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
