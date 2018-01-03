import Page1DefaultState from './page-1-default-state';
import * as actions from './page-1-actions';

const page1Reducer = (state = Page1DefaultState, action) =>{
	let newState;
	switch(action.type){
		case actions.pageActionID:
			return {...state, ...action.payload};

		default:
			return {...state};
	}
};

export default page1Reducer;