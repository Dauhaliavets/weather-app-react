import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../store/weatherReducers';
import './Form.css';

export default function Form() {
	const dispatch = useDispatch();
	const [cityName, setCityName] = useState('');

	const handlerSubmit = (e) => {
		dispatch(fetchWeather(cityName));
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
				value={cityName}
			/>
			<button className='form__search-button' type='submit'></button>
		</form>
	);
}
