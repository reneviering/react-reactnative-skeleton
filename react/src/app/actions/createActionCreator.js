import {RECEIVE_ASSORTMENTS} from './actions';

export const createActionCreator = (store, dataProvider) => {
	const fetchAssortments = () => {
		return dataProvider.getAssortments()
			.then(response => {
				store.dispatch({
					type: RECEIVE_ASSORTMENTS,
					assortments: response
				});
			});
	};

	return {fetchAssortments};
};
