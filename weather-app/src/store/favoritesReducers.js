import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const initialState = {
	favorites: [],
}

export const favoritesReducers = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE:
			if(!state.favorites.includes(action.payload)) {
				return {
					...state,
					favorites: [...state.favorites, action.payload],
				}
			}
			return state;
		case REMOVE_FAVORITE:
			return {
				...state,
				favorites: [...state.favorites.filter(item => item !== action.payload)]
			}
	
		default:
			return state;
	}
}