import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createHistory from 'history/createBrowserHistory';
import {routerReducer, routerMiddleware} from 'react-router-redux';

import AppDefaultState from './app-default-state';
import * as actions from './app-actions';

const appReducer = (state = AppDefaultState, action) =>{
	let newState;
	switch(action.type){
		//*******************************************
		//  Generic Action
		//*******************************************
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
		router: routerReducer
	}),
	composeEnhancers(applyMiddleware(middleware))
);

export default store;

