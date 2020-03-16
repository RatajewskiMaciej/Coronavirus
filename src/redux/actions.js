import {
	UPDATE_DATE,
	RESET_DATE,
	UPDATE_DATA,
	UPDATE_COUNTRY
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

export const updateCountry = (country) => (dispatch) => {
	dispatch({ type: UPDATE_COUNTRY, country });
};
