import { UPDATE_DATE, RESET_DATE, UPDATE_DATA, UPDATE_COUNTRY } from './types';


const initialState = {
	data: '',
	date: '',
	country: {}
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
				data: action.data.map((item) => ({
					Province: item[0],
					Country: item[1],
					Confirmed: item[3],
					Deaths: item[4],
					Recovered: item[5],
				})),
			};
		case UPDATE_COUNTRY:
			return {
				...state,
				country: action.country,
			};
		default:
			return state;
	}
}

export default reducer;
