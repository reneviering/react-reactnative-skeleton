import {RECEIVE_ASSORTMENTS} from '../actions/actions';

const assortments = (state = [], action) => {
	switch (action.type) {
		case RECEIVE_ASSORTMENTS:
			return [...action.assortments];
		default:
			return state;
	}
};

export default assortments;
