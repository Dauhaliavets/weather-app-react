import React from 'react';
import FavoritesItem from './FavoritesItem/FavoritesItem';
import './FavoritesLocation.css';

export default function FavoritesLocation({ favorites, removeFavorite, getData }) {
	const favoritesList = favorites.map((item, ind) => {
		return (
			<FavoritesItem
				key={ind + 1}
				city={item}
				removeFavorite={removeFavorite}
				getData={getData}
			/>
		);
	});

	return (
		<div className='favorites__locations'>
			<h3 className='locations__title'>Added Locations:</h3>
			<ul className='locations__list'>{favoritesList}</ul>
		</div>
	);
}
