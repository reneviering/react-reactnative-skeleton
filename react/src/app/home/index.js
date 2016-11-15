import React from 'react';
import ReactDOM from 'react-dom';
import HomeComponent from './components/homeComponent.js';

const init = ($el, data) => {
	console.warn(data);
	ReactDOM.render(<HomeComponent store={data.store} actionCreator={data.actionCreator}/>, $el);
};

const dispose = () => {

};

export default {init, dispose};
