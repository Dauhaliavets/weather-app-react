import { requestData } from '../Api/Api';
import { setData, SET_DATA } from './actions';
const initialState = {
	weatherAll: {},
};

export const weatherReducers = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA:
			return {
				...state,
				weatherAll: action.payload,
			};

		default:
			return state;
	}
};

export const fetchWeather = (city) => async (dispatch) => {
	const response = await requestData(city);
	dispatch(setData(response))
}
