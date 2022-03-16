import './App.css';
import CurrentLocation from './Components/CurrentLocation/CurrentLocation';
import FavoritesLocation from './Components/FavoriteLocation/FavoritesLocation';
import Form from './Components/Form/Form';

function App() {
	return (
		<div className='App'>
			<div className='App-container'>
				<Form />
				<CurrentLocation />
				<FavoritesLocation />
			</div>
		</div>
	);
}

export default App;
