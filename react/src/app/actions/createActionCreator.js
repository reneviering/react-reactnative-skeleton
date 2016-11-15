import {http} from '../core/httpProvider.js';
import {RECEIVE_ASSORTMENTS} from './actions';

export const createActionCreator = store => {
	const fetchAssortments = () => {
		return http.get('http://localhost:8082/api/assortment', true)
			.then(response => {
				store.dispatch({
					type: RECEIVE_ASSORTMENTS,
					assortments: response
				});
			});
	};

	return {fetchAssortments};
};
