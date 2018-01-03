import Page1DefaultState from './page-1-default-state';
import * as actions from './page-1-actions';

const page1Reducer = (state = Page1DefaultState, action) =>{
	let newState;
	switch(action.type){
		case actions.pageActionID:
			newState = Object.assign({}, state, {payload:action.payload});
			break;
		default:
			newState = {...state};
	}
	return newState;
};

export default page1Reducer;