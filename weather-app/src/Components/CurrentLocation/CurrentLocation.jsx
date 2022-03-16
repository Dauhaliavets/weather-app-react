import React, { useState } from 'react';
import './CurrentLocation.css';
import Details from './Details/Details';
import Forecast from './Forecast/Forecast';
import Now from './Now/Now';
import TabBtn from './TabBtn/TabBtn';

const dataTabBtns = ['Now', 'Details', 'Forecast'];

export default function CurrentLocation() {
	const [tab, setTab] = useState('now');
	const handlerTabClick = (e) => setTab(e.target.dataset.tab);

	return (
		<div className='current__location'>
			<div className='tabs'>
				{tab === 'now' && <Now />}
				{tab === 'details' && <Details />}
				{tab === 'forecast' && <Forecast />}
			</div>
			<ul className='tabs__control'>
				{dataTabBtns.map((data, index) => <TabBtn key={index + 1} data={data} tabActive={tab} handlerTabClick={handlerTabClick}/>)}
			</ul>
		</div>
	);
}
