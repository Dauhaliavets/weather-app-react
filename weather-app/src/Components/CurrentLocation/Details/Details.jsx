import React from 'react';

const SYMBOL_DEGREE = '\u00B0';

export default function Details({ weather }) {
	return (
		<div className='tabs__item active' data-tab='details'>
			<span>DETAILS</span>
			<p className='location__name'>{weather.city}</p>
			<div className='details__location'>
				<p className='details__temperature temperature'>
					Temperature: <span>{weather.temp}{SYMBOL_DEGREE}</span>
				</p>
				<p className='details__feels__like feels__like'>
					Feels like: <span>{weather.feelsLike}{SYMBOL_DEGREE}</span>
				</p>
				<p className='details__weather weather'>
					Weather: <span>{weather.weather}</span>
				</p>
				<p className='details__sunrise sunrise'>
					Sunrise: <span>{weather.sunrise.hours}:{weather.sunrise.minutes}</span>
				</p>
				<p className='details__sunset sunset'>
					Sunset: <span>{weather.sunset.hours}:{weather.sunset.minutes}</span>
				</p>
			</div>
		</div>
	);
}
