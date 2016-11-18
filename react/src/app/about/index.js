import React from 'react';
import ReactDOM from 'react-dom';

import AboutComponent from './components/aboutComponent.js';

const init = $el => {
	ReactDOM.render(<AboutComponent/>, $el);
};

export default {init};
