import { combineReducers } from "redux";
import { favoritesReducers } from "./favoritesReducers";
import { weatherReducers } from "./weatherReducers";

const rootReducers = combineReducers({
	favorites: favoritesReducers,
	weatherAll: weatherReducers,
}) 

export default rootReducers