import React from 'react';
import { URLS, ICON_SIZE_SMALL, SYMBOL_DEGREE } from '../../../../Helpers/utils';

export default function ForecastItem({ forecast }) {
	const urlIcon = `${URLS.SERVER_ICON}${forecast.iconCode}@${ICON_SIZE_SMALL}.png`;

	return (
		<div className='forecast__card'>
			<div className='forecast__dateTime-wrapper'>
				<div className='forecast__date'>
					{forecast.date.day} {forecast.date.month}
				</div>
				<div className='forecast__time'>
					{forecast.time.hours}:{forecast.time.minutes}
				</div>
			</div>
			<div className='forecast__info-wrapper'>
				<div className='forecast__info__temperature'>
					<div className='forecast__temperature'>
						Temperature:{' '}
						<span>
							{forecast.temperature}{SYMBOL_DEGREE}
						</span>
					</div>
					<div className='forecast__feels_like'>
						Feels like:{' '}
						<span>
							{forecast.feelsLike}{SYMBOL_DEGREE}
						</span>
					</div>
				</div>
				<div className='forecast__info__weather'>
					<div className='forecast__main'>{forecast.weather}</div>
					<div className='forecast__icon'>
						<img src={urlIcon} width="50px" height="50px" alt="icon-weather" />
					</div>
				</div>
			</div>
		</div>
	);
}
