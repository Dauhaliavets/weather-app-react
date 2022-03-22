import React from 'react';
import { SYMBOL_CROSS } from '../../../Helpers/utils';

export default function FavoritesItem({ city, removeFavorite, getData }) {	
	const handlerClickCity = (city) => {
		getData(city);
	};

	const handlerClickRemove = (city) => {
		removeFavorite(city);
	}

	return (
		<li className='location__item'>
			<span className='location__title' onClick={() => handlerClickCity(city)}>{city}</span>
			<button className='location__close' onClick={() => handlerClickRemove(city)}>{SYMBOL_CROSS}</button>
		</li>
	);
}
