const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const SET_DATA = 'SET_DATA';

const addFavorite = (name) => {
	return { 
		type: ADD_FAVORITE,
		payload: name, 
	};
};

const removeFavorite = (name) => {
	return { 
		type: REMOVE_FAVORITE,
		payload: name, 
	};
};

const setData = (name) => {
	return {
		type: SET_DATA,
		payload: name,
	}
}

export { ADD_FAVORITE, REMOVE_FAVORITE, SET_DATA, addFavorite, removeFavorite, setData };