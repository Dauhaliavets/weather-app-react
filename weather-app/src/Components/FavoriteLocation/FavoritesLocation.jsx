import React from 'react';
import FavoritesItem from './FavoritesItem/FavoritesItem';
import './FavoritesLocation.css'

export default function FavoritesLocation({ favorites }) {
	const favoritesList = favorites.map(item => <FavoritesItem city={item}/>)
	return (
		<div className='favorites__locations'>
			<h3 className='locations__title'>Added Locations:</h3>
			<ul className='locations__list'>
				{favoritesList}
			</ul>
		</div>
	);
}
