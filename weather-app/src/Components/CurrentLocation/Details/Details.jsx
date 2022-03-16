import React from 'react';
import { SYMBOL_DEGREE } from '../../../Helpers/utils';

export default function Details({ weather: {city, temp, feelsLike, weather, sunrise, sunset} }) {
	return (
		<div className='tabs__item active' data-tab='details'>
			<p className='location__name'>{city}</p>
			<div className='details__location'>
				<p className='details__temperature temperature'>
					Temperature: <span>{temp}{SYMBOL_DEGREE}</span>
				</p>
				<p className='details__feels__like feels__like'>
					Feels like: <span>{feelsLike}{SYMBOL_DEGREE}</span>
				</p>
				<p className='details__weather weather'>
					Weather: <span>{weather}</span>
				</p>
				<p className='details__sunrise sunrise'>
					Sunrise: <span>{sunrise.hours}:{sunrise.minutes}</span>
				</p>
				<p className='details__sunset sunset'>
					Sunset: <span>{sunset.hours}:{sunset.minutes}</span>
				</p>
			</div>
		</div>
	);
}
