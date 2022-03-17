import { useEffect, useState } from 'react';
import { transformData, transformDataForecast } from './Helpers/transform';
import './Common/normalize.css';
import './App.css';
import CurrentLocation from './Components/CurrentLocation/CurrentLocation';
import FavoritesLocation from './Components/FavoriteLocation/FavoritesLocation';
import Form from './Components/Form/Form';
import { URLS, UTIL_TO_API, API_KEY } from './Helpers/utils';

function App() {
	const [weather, setWeather] = useState({});
	const [forecast, setForecast] = useState({});
	const [favorites, setFavorites] = useState([])

	const requestWeather = (city) => {
		const url = `${URLS.SERVER}?q=${city}&units=${UTIL_TO_API}&appid=${API_KEY}`;

		fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw new Error(`${response.status === 404 ? 'Not found' : response.status}`);
		})
		.then((data) => {
			setWeather(transformData(data));
		})
		.catch(alert);
	}

	const requestForecast = (city) => {
		const urlForecast = `${URLS.SERVER_FORECAST}?q=${city}&units=${UTIL_TO_API}&appid=${API_KEY}`;

		fetch(urlForecast)
			.then(response => {
				if(response.ok) {
					return response.json();
				}
				throw new Error(`${response.status === 404 ? 'Not found' : response.status}`)
			})
			.then(data => setForecast(data))
			.catch(alert);

	}

	const addFavorite = (city) => {
		if(!favorites.includes(city)) {
			setFavorites([...favorites, city]);
		}
	}

	const removeFavorite = (city) => {
		setFavorites(favorites.filter(item => item !== city));
	}

	return (
		<div className='app'>
			<div className='app-container'>
				<Form requestWeather={requestWeather} requestForecast={requestForecast}/>
				<CurrentLocation weather={weather} forecast={forecast} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite}/>
				<FavoritesLocation requestWeather={requestWeather} requestForecast={requestForecast} favorites={favorites} removeFavorite={removeFavorite}/>
			</div>
		</div>
	);
}

export default App;
