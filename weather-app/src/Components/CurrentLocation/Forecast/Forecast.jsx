import React from 'react';

export default function Forecast() {
	return (
		<div className='tabs__item active' data-tab='forecast'>
			<span>FORECAST</span>
			<p className='location__name'></p>
			<div className='forecast__cards'></div>
		</div>
	);
}
