import React from 'react';
import { URLS, ICON_SIZE_SMALL, SYMBOL_DEGREE } from '../../../../Helpers/utils';

export default function ForecastItem({ forecast: {iconCode, date, time, temperature, feelsLike, weather} }) {
	const urlIcon = `${URLS.SERVER_ICON}${iconCode}@${ICON_SIZE_SMALL}.png`;

	return (
		<div className='forecast__card'>
			<div className='forecast__dateTime-wrapper'>
				<div className='forecast__date'>
					{date.day} {date.month}
				</div>
				<div className='forecast__time'>
					{time.hours}:{time.minutes}
				</div>
			</div>
			<div className='forecast__info-wrapper'>
				<div className='forecast__info__temperature'>
					<div className='forecast__temperature'>
						Temperature:{' '}
						<span>
							{temperature}{SYMBOL_DEGREE}
						</span>
					</div>
					<div className='forecast__feels_like'>
						Feels like:{' '}
						<span>
							{feelsLike}{SYMBOL_DEGREE}
						</span>
					</div>
				</div>
				<div className='forecast__info__weather'>
					<div className='forecast__main'>{weather}</div>
					<div className='forecast__icon'>
						<img src={urlIcon} width="45" height="45" alt="icon-weather" />
					</div>
				</div>
			</div>
		</div>
	);
}
