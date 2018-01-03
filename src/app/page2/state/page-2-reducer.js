import Page2DefaultState from './page-2-default-state';
import * as actions from './page-2-actions';

const page2Reducer = (state = Page2DefaultState, action) =>{
	let newState;
	switch(action.type){
		case actions.pageActionID:
			return {...state, ...action.payload};

		default:
			return {...state};
	}
};

export default page2Reducer;