import React from 'react';
import { useDispatch } from 'react-redux';
import { SYMBOL_CROSS } from '../../../Helpers/utils';
import { removeFavorite } from '../../../store/actions';
import { fetchWeather } from '../../../store/weatherReducers';

export default function FavoritesItem({ city }) {	
	const dispatch = useDispatch();

	const handlerClickCity = (city) => {
		dispatch(fetchWeather(city));
	};

	const handlerClickRemove = (city) => {
		dispatch(removeFavorite(city));
	}

	return (
		<li className='location__item'>
			<span className='location__title' onClick={() => handlerClickCity(city)}>{city}</span>
			<button className='location__close' onClick={() => handlerClickRemove(city)}>{SYMBOL_CROSS}</button>
		</li>
	);
}
