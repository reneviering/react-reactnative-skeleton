import {http} from './httpProvider.js';

const getAssortments = () => {
	return http.get('http://localhost:8082/api/assortment', true);
};

export default {
	getAssortments
};
