import React from 'react'; // eslint-disable-line
import {mount} from 'enzyme';
import {createStore} from 'redux';
import HomeComponent from '../homeComponent.js'; // eslint-disable-line
import rootReducer from '../../reducers/rootReducer';
import {createActionCreator} from '../../actions/createActionCreator';

const fakedAssortments = [{foo: 'bar'}];
const dataProviderMock = {
	getAssortments: () => {
		return {
			then: (cb) => {
				cb(fakedAssortments);
			}
		};
	}
};

let store = null;
let actionCreator = null;

describe('<HomeComponent/>', () => { // eslint-disable-line
	beforeEach(() => {
		store = createStore(rootReducer);
		actionCreator = createActionCreator(store, dataProviderMock);
	});

	it('is rendered correctly', () => { // eslint-disable-line
		const wrapper = mount(<HomeComponent store={store} actionCreator={actionCreator}/>);
		expect(wrapper.state().assortments).toEqual(fakedAssortments);
	});

	// describe('clicking on the component', () => { // eslint-disable-line
	// 	it('renders the correct text', () => { // eslint-disable-line
	// 		const component = shallow(<HomeComponent/>);
	// 		component.simulate('click');
	// 		expect(component.state().text).toBe('Ich wurde geklickt'); // eslint-disable-line
	// 	});
	// });
});
