import React from 'react';

import Home from './home/HomeComponent';
import About from './about/AboutComponent';

const routeConfiguration = {
	Home(props, navigator, route, store, actionCreator) {
		return <Home navigator={navigator} routeParams={route} store={store} actionCreator={actionCreator}/>;
	},
	About(props, navigator, route, store, actionCreator) {
		return <About navigator={navigator} routeParams={route} store={store} actionCreator={actionCreator}/>;
	}
};

export default routeConfiguration;
