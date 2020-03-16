import {
	UPDATE_DATE,
	RESET_DATE,
	UPDATE_DATA,
} from './types';

export const updateDate = (date) => (dispatch) => {
	dispatch({ type: UPDATE_DATE, date });
};

export const resetDate = () => (dispatch) => {
	dispatch({ type: RESET_DATE });
};

export const updateData = (data) => (dispatch) => {
	dispatch({ type: UPDATE_DATA, data });
};
