import React from 'react';
import { useSelector } from 'react-redux';
import FavoritesItem from './FavoritesItem/FavoritesItem';
import './FavoritesLocation.css';

export default function FavoritesLocation() {
	const selectorFavorites = useSelector(state => state.favorites.favorites);

	const favoritesList = selectorFavorites.map((item, ind) => {
		return (
			<FavoritesItem
				key={ind + 1}
				city={item}
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
