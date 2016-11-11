import {shallow} from 'enzyme';
import React from 'react';
import {
	TouchableHighlight,
	Text
} from 'react-native';
import MainComponent from '../MainComponent.js';

let cb;
const store = callback => {
	cb = callback;
	callback('test');
};

it('renders correctly', () => {
	shallow(<MainComponent store={store}/>);
});

describe('Touching the component', () => {
	it('changes the text correctly', () => {
		const wrapper = shallow(<MainComponent store={store}/>);
		const touchable = wrapper.find(TouchableHighlight);
		touchable.simulate('press');

		const text = wrapper.find(Text).first();
		expect(wrapper.state().text).toBe('Ich habe geklickt');
	});
});
