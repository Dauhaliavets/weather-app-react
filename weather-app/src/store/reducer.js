import { combineReducers } from "redux";
import { favoritesReducers } from "./favoritesReducers";

const rootReducers = combineReducers({
	favorites: favoritesReducers,
}) 

export default rootReducers