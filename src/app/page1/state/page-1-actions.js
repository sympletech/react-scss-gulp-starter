export const pageActionID = 'Page1_ACTION';
export const pageAction = actionPayload => {
	return {
		type: pageActionID,
		payload: actionPayload
	}
};