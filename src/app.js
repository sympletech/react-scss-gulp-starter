import React from 'react';
import ReactDOM from 'react-dom'
import {Route, Switch} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import {store, history} from './app/app_state/reducer';
import {Provider} from 'react-redux';

import PageOne from './app/page1/page_1';
import PageTwo from './app/page2/page_2';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Switch>
				<Route exact path='/' component={PageOne} />
				<Route path='/page2' component={PageTwo} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);