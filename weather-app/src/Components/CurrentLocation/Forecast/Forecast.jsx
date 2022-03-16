import React from 'react';
import { transformDataForecast } from '../../../Helpers/transform';
import ForecastItem from './ForecastItem/ForecastItem';

export default function Forecast({ forecast }) {

	const forecastItems = forecast.list.map(item => {
		const transformData = transformDataForecast(item);
		return <ForecastItem forecast={transformData}/>
	});

	return (
		<div className='tabs__item active' data-tab='forecast'>
			<span>FORECAST</span>
			<p className='location__name'>{forecast.city.name}</p>
			<div className='forecast__cards'>
				{forecastItems}
			</div>
		</div>
	);
}
