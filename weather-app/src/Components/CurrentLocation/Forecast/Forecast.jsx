import React from 'react';
import { useSelector } from 'react-redux';
import { transformForecastItem } from '../../../Helpers/transform';
import ForecastItem from './ForecastItem/ForecastItem';

export default function Forecast() {
	const forecast = useSelector(state => state.weatherAll.weatherAll.forecast);

	const cards = forecast.list.map(item => {
		const transformData = transformForecastItem(item);
		return <ForecastItem key={item.dt / 100} forecast={transformData}/>
	});

	return (
		<div className='tabs__item active' data-tab='forecast'>
			<p className='location__name'>{forecast.city.name}</p>
			<div className='forecast__cards'>
				{cards}
			</div>
		</div>
	);
}
