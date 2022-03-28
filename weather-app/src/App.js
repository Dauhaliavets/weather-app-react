import { useEffect } from 'react';
import './Common/normalize.css';
import './App.css';
import CurrentLocation from './Components/CurrentLocation/CurrentLocation';
import FavoritesLocation from './Components/FavoriteLocation/FavoritesLocation';
import Form from './Components/Form/Form';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './store/weatherReducers';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeather('Paris'));
	}, []);

	return (
		<div className='app'>
			<div className='app-container'>
				<Form/>
				<CurrentLocation/>
				<FavoritesLocation/>
			</div>
		</div>
	);
}

export default App;
