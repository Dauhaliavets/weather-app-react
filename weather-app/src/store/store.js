import { applyMiddleware, createStore } from "redux";
import rootReducers from "./reducer";
import thunkMiddleware from 'redux-thunk';

let preloadedState;
const persistedState = localStorage.getItem('reduxState');

if(persistedState) {
	preloadedState = JSON.parse(persistedState)
} else {
	preloadedState = {}
}

const store = createStore(rootReducers, preloadedState, applyMiddleware(thunkMiddleware));

export default store;