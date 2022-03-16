import React from 'react';

export default function Details() {
	return (
		<div className='tabs__item active' data-tab='details'>
			<span>DETAILS</span>
			<p className='location__name'></p>
			<div className='details__location'>
				<p className='details__temperature temperature'>
					Temperature: <span>14&deg</span>
				</p>
				<p className='details__feels__like feels__like'>
					Feels like: <span>10&deg</span>
				</p>
				<p className='details__weather weather'>
					Weather: <span>Clouds</span>
				</p>
				<p className='details__sunrise sunrise'>
					Sunrise: <span>03:21</span>
				</p>
				<p className='details__sunset sunset'>
					Sunset: <span>18:54</span>
				</p>
			</div>
		</div>
	);
}
