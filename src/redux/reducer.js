import { UPDATE_DATE, RESET_DATE, UPDATE_DATA } from './types';


const initialState = {
	data: '',
	date: '',
};

function reducer(state = initialState, action) {
	switch (action.type) {
	case UPDATE_DATE:
		return {
			...state,
			date: action.date,
		};
	case RESET_DATE:
		return {
			...state,
			date: '',
		};
	case UPDATE_DATA:
		return {
			...state,
			data: action.data,
		};
	default:
		return state;
	}
}

export default reducer;
