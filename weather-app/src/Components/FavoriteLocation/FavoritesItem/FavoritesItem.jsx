import React from 'react';
import { SYMBOL_CROSS } from '../../../Helpers/utils';

export default function FavoritesItem({ city }) {
	return (
		<li className='location__item'>
			<a className='location__title' href='#'>
				{city}
			</a>
			<button className='location__close'>{SYMBOL_CROSS}</button>
		</li>
	);
}
