import React from 'react';

import Home from './components/HomeComponent';
import About from './components/AboutComponent';

const routeConfiguration = {
	Home(props, navigator, route, store, actionCreator) {
		return <Home navigator={navigator} routeParams={route} store={store} actionCreator={actionCreator}/>;
	},
	About(props, navigator, route, store, actionCreator) {
		return <About navigator={navigator} routeParams={route} store={store} actionCreator={actionCreator}/>;
	}
};

export default routeConfiguration;
