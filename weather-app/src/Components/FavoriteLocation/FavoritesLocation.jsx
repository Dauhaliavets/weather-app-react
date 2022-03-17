import React from 'react';
import FavoritesItem from './FavoritesItem/FavoritesItem';
import './FavoritesLocation.css'

export default function FavoritesLocation({ favorites, removeFavorite, requestWeather, requestForecast }) {
	const favoritesList = favorites.map((item, ind) => <FavoritesItem key={ind + 1} city={item} removeFavorite={removeFavorite} requestWeather={requestWeather} requestForecast={requestForecast}/>)
	
	return (
		<div className='favorites__locations'>
			<h3 className='locations__title'>Added Locations:</h3>
			<ul className='locations__list'>
				{favoritesList}
			</ul>
		</div>
	);
}
