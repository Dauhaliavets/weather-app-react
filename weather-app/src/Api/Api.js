import { transformForecast, transformWeather } from '../Helpers/transform';
import { URLS, UTIL_TO_API, API_KEY } from '../Helpers/utils';

const createURL = (url, query) =>
	`${url}?q=${query}&units=${UTIL_TO_API}&appid=${API_KEY}`;

const request = async (url, city) => {
	const requestUrl = createURL(url, city);

	try {
		let response = await fetch(requestUrl);
		let data = await response.json();
		return data;
	} catch (error) {
		alert(
			`Message: ${error.message}. Name: ${error.name}. Stack: ${error.stack}.`
		);
	}
};

export const requestData = async (city) => {
	const dataWeather = await request(URLS.SERVER, city).then(transformWeather);
	const dataForecast = await request(URLS.SERVER_FORECAST, city).then(
		transformForecast
	);

	return {
		weather: dataWeather,
		forecast: dataForecast,
	};
};
