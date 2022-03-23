import { createStore } from "redux";
import rootReducers from "./reducer";

let preloadedState;
const persistedState = localStorage.getItem('reduxState');

if(persistedState) {
	preloadedState = JSON.parse(persistedState)
} else {
	preloadedState = {}
}

const store = createStore(rootReducers, preloadedState);

export default store;