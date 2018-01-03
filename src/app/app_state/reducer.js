import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import AppDefaultState from './app-default-state';
import * as actions from './app-actions';

import page1Reducer from '../page1/state/page-1-reducer';
import page2Reducer from '../page2/state/page-2-reducer';

const appReducer = (state = AppDefaultState, action) =>{
	let newState;
	switch(action.type){
		case actions.appActionID:
			newState = {...state};
			newState.lastAppAction = action.payload;
			return newState;

		default:
			return {...state};
	}
};

export const history = createHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	combineReducers({
		appReducer,
		page1Reducer,
		page2Reducer,
		router: routerReducer
	}),
	composeEnhancers(applyMiddleware(middleware))
);

export default store;

