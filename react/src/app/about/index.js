import React from 'react';
import ReactDOM from 'react-dom';

import AboutComponent from './aboutComponent.js';

const init = $el => {
	ReactDOM.render(<AboutComponent/>, $el);
};

const dispose = () => {

};

export default {init, dispose};
