function transformWeather(data) {
	return {
		temp: Math.round(data.main.temp),
		city: data.name,
		iconCode: data.weather[0].icon,
		feelsLike: Math.round(data.main.feels_like),
		weather: data.weather[0].main,
		sunrise: {
			hours: minTwoDigits(new Date(data.sys.sunrise * 1000).getHours()),
			minutes: minTwoDigits(new Date(data.sys.sunrise * 1000).getMinutes()),
		},
		sunset: {
			hours: minTwoDigits(new Date(data.sys.sunset * 1000).getHours()),
			minutes: minTwoDigits(new Date(data.sys.sunset * 1000).getMinutes()),
		},
	};
}

function transformForecast({ city, list }) {
	return {
		city,
		list,
	};
}

function transformForecastItem(data) {
	return {
		date: {
			day: new Date(data.dt * 1000).getDate(),
			month: new Date(data.dt * 1000).toLocaleString('en-US', {
				month: 'long',
			}),
		},
		time: {
			hours: minTwoDigits(new Date(data.dt * 1000).getHours()),
			minutes: minTwoDigits(new Date(data.dt * 1000).getMinutes()),
		},
		temperature: Math.round(data.main.temp),
		feelsLike: Math.round(data.main.feels_like),
		weather: data.weather[0].main,
		iconCode: data.weather[0].icon,
	};
}

function minTwoDigits(num) {
	return (num < 10 ? '0' : '') + num;
}

export { transformWeather, transformForecast, transformForecastItem };
