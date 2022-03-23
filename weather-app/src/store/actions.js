const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
const GET_DATA = 'GET_DATA';

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

const getData = (name) => {
	return {
		type: GET_DATA,
		name
	}
}

export { ADD_FAVORITE, REMOVE_FAVORITE, GET_DATA, addFavorite, removeFavorite, getData };