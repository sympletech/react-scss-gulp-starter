export const appActionID = 'APP_ACTION';
export const appAction = (actionPayload) => ({
	type: appActionID,
	payload: actionPayload
});
