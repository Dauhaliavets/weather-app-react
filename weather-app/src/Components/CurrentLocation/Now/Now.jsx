import React from 'react';
import { URLS, SYMBOL_DEGREE, ICON_SIZE_LARGE } from '../../../Helpers/utils';

export default function Now({ weather: {temp, city, iconCode}, favorites, addFavorite, removeFavorite }) {
	const urlIcon = `${URLS.SERVER_ICON}${iconCode}@${ICON_SIZE_LARGE}.png`;

	const isFavorites = favorites.includes(city);

	const handlerClickLike = (value) => {
		if(isFavorites) {
			removeFavorite(city);
		} else {
			addFavorite(value);
		}
	}

	return (
		<div className='tabs__item active' data-tab='now'>
			<div className='now__temperature temperature'>
				<span>{temp}{SYMBOL_DEGREE}&nbsp;</span>
			</div>
			<div className='now__icon'>
				<img src={urlIcon} alt='cloud' className='icon-now' />
			</div>
			<div className='location__wrapper'>
				<p className='location__name'>{city}&nbsp;</p>
				<div className={isFavorites ? 'like__icon active' : 'like__icon'} onClick={() => handlerClickLike(city)}>
					<svg
						width='24'
						height='25'
						viewBox='0 0 24 25'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							opacity='0.54'
							fillRule='evenodd'
							clipRule='evenodd'
							d='M17.5 1C15.0556 1 12.8556 2.7875 12 5.125C11.1444 2.7875 8.94444 1 6.5 1C3.44444 1 1 3.6125 1 7.1875C1 12 5.27778 16.125 12 23C18.7222 16.125 23 12 23 7.1875C23 3.6125 20.5556 1 17.5 1Z'
							stroke='black'
							strokeWidth='2'
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
