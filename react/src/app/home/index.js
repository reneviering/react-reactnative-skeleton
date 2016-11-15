import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './homeComponent.js';

const init = ($el, data) => {
	console.warn(data);
	ReactDOM.render(<HomeComponent/>, $el);
};

const dispose = () => {

};

export default {init, dispose};
