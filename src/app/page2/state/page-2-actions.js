export const pageActionID = 'Page2_ACTION';
export const pageAction = actionPayload => {
	return {
		type: pageActionID,
		payload: actionPayload
	}
};