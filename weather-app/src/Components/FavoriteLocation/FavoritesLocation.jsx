import React from 'react';
import './FavoritesLocation.css'

export default function FavoritesLocation() {
	return (
		<div className='favorites__locations'>
			<h3 className='locations__title'>Added Locations:</h3>
			<ul className='locations__list'></ul>
		</div>
	);
}
