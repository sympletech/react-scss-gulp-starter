import React from 'react';
import ReactDOM from 'react-dom'
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {store, history} from './app/app_state/reducer';
import {Provider} from 'react-redux';

import ComponentA from './app/components/component_a';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path='/' component={ComponentA} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);