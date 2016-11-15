import {createStore} from 'redux';
import createRouter from './core/router.js';
import HomeRoute from './home';
import AboutRoute from './about';
import rootReducer from './reducers/rootReducer';
import {createActionCreator} from './actions/createActionCreator';

const store = createStore(rootReducer);
const actionCreator = createActionCreator(store);

const router = createRouter('app');

router.addRoute('', {
	init: () => {
		router.navigateToHashUrl('home');
	}
});

router.addRoute('/', {
	init: () => {
		router.navigateToHashUrl('home');
	}
});

router.addRoute('home', {
	init: HomeRoute.init,
	dispose: HomeRoute.dispose,
	data: {store: store, actionCreator: actionCreator}
});
router.addRoute('about', {
	init: AboutRoute.init,
	dispose: AboutRoute.dispose,
	data: {store: store, actionCreator: actionCreator}
});

router.addRoute('*', {
	init: () => {
		console.log('I am the otherwise route');
	}
});
