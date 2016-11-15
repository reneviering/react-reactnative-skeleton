import {RECEIVE_ASSORTMENTS} from './actions';

export const createActionCreator = store => {
	const fetchAssortments = () => {
		return fetch('http://localhost:8082/api/assortment') // eslint-disable-line
			.then(response => response.json())
			.then(response => {
				store.dispatch({
					type: RECEIVE_ASSORTMENTS,
					assortments: response
				});
			});
	};

	return {fetchAssortments};
};
