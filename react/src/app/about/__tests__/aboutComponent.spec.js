import React from 'react'; // eslint-disable-line
import {shallow} from 'enzyme';

import AboutComponent from '../components/aboutComponent.js'; // eslint-disable-line

describe('<AboutComponent/>', () => { // eslint-disable-line
	it('is rendered correctly', () => { // eslint-disable-line
		shallow(<AboutComponent/>);
	});

	describe('clicking on the component', () => { // eslint-disable-line
		it('renders the correct text', () => { // eslint-disable-line
			const component = shallow(<AboutComponent/>);
			component.simulate('click');
			expect(component.state().text).toBe('Ich wurde geklickt'); // eslint-disable-line
		});
	});
});
