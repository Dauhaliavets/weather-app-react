import React from 'react';
import './Form.css';

export default function Form() {
	return (
		<form className='form__search'>
			<input
				className='form__search-input'
				type='text'
				name='city'
				id='citySearch'
				placeholder='Search city'
			/>
			<button className='form__search-button' type='submit'></button>
		</form>
	);
}
