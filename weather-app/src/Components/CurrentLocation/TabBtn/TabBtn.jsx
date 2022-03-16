import React from 'react';

export default function TabBtn({ data, tabActive, handlerTabClick }) {
	const isActive = tabActive === data.toLowerCase();
	return (
		<li className='tabs__btn-wrapper'>
			<button className={`tabs__btn ${isActive && 'active'}`} data-tab={data.toLowerCase()} onClick={handlerTabClick}>
				{data}
			</button>
		</li>
	);
}
