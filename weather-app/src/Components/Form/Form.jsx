import React, { useEffect, useState } from 'react';
import './Form.css';

export default function Form({ requestWeather, requestForecast }) {
	const [cityName, setCityName] = useState('Minsk');

	useEffect(() => {
		requestWeather(cityName);
		requestForecast(cityName);
	}, []);

	const handlerSubmit = (e) => {
		requestWeather(cityName);
		requestForecast(cityName);
		e.preventDefault();
	}

	const onChange = (e) => setCityName(e.target.value);

	return (
		<form className='form__search' onSubmit={handlerSubmit}>
			<input
				className='form__search-input'
				type='text'
				name='city'
				id='citySearch'
				placeholder='Search city'
				onChange={onChange}
			/>
			<button className='form__search-button' type='submit'></button>
		</form>
	);
}
