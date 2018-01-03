//*******************************************
//  toggleLoader
//*******************************************
export const appActionID = 'APP_ACTION';
export const appAction = actionPayload => {
	return {
		type: appActionID,
		payload: actionPayload
	}
};