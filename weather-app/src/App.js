import { useEffect, useState } from 'react';
import './Common/normalize.css';
import './App.css';
import CurrentLocation from './Components/CurrentLocation/CurrentLocation';
import FavoritesLocation from './Components/FavoriteLocation/FavoritesLocation';
import Form from './Components/Form/Form';
import { requestData } from './Api/Api';

function App() {
	const [weatherAll, setWeatherAll] = useState({weather: {}, forecast: {}});

	const getData = (city) => {
		requestData(city).then(data => setWeatherAll(data));
	}

	return (
		<div className='app'>
			<div className='app-container'>
				<Form getData={getData}/>
				<CurrentLocation weatherAll={weatherAll}/>
				<FavoritesLocation getData={getData}/>
			</div>
		</div>
	);
}

export default App;
