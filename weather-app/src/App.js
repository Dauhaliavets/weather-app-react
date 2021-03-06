import { useEffect, useState } from 'react';
import './Common/normalize.css';
import './App.css';
import CurrentLocation from './Components/CurrentLocation/CurrentLocation';
import FavoritesLocation from './Components/FavoriteLocation/FavoritesLocation';
import Form from './Components/Form/Form';
import { requestData } from './Api/Api';

function App() {
	const [weatherAll, setWeatherAll] = useState({weather: {}, forecast: {}});
	const [favorites, setFavorites] = useState([]);

	useEffect(() => {
		const favoritesFromStorage = localStorage.getItem('favorites');
		setFavorites(JSON.parse(favoritesFromStorage));
	}, []);

	useEffect(() => {
		localStorage.setItem('favorites', JSON.stringify(favorites));
	}, [favorites]);

	const addFavorite = (city) => {
		if(!favorites.includes(city)) {
			setFavorites([...favorites, city]);
		}
	}

	const removeFavorite = (city) => {
		setFavorites(favorites.filter(item => item !== city));
	}

	const getData = (city) => {
		requestData(city).then(data => setWeatherAll(data));
	}

	return (
		<div className='app'>
			<div className='app-container'>
				<Form getData={getData}/>
				<CurrentLocation weatherAll={weatherAll} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite}/>
				<FavoritesLocation getData={getData} favorites={favorites} removeFavorite={removeFavorite}/>
			</div>
		</div>
	);
}

export default App;
