import React from 'react';
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux';
import store from './app/app_state/reducer';

import ComponentA from './app/components/component_a';

ReactDOM.render(
	<div store={store}>
		React Online!
		<ComponentA />
	</div>,
	document.getElementById('root')
);