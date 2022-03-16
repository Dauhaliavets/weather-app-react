import React, { useState } from 'react';
import './CurrentLocation.css';
import Details from './Details/Details';
import Forecast from './Forecast/Forecast';
import Now from './Now/Now';
import TabBtn from './TabBtn/TabBtn';

const dataTabBtns = ['Now', 'Details', 'Forecast'];

export default function CurrentLocation({ weather, forecast, favorites, addFavorite, removeFavorite }) {
	const [tab, setTab] = useState('now');
	const handlerTabClick = (e) => setTab(e.target.dataset.tab);

	return (
		<div className='current__location'>
			<div className='tabs'>
				{tab === 'now' && <Now weather={weather} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite}/>}
				{tab === 'details' && <Details weather={ weather }/>}
				{tab === 'forecast' && <Forecast forecast={ forecast }/>}
			</div>
			<ul className='tabs__control'>
				{dataTabBtns.map((data, index) => <TabBtn key={index + 1} data={data} tabActive={tab} handlerTabClick={handlerTabClick}/>)}
			</ul>
		</div>
	);
}
