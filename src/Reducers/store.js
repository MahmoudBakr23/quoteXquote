import { createStore } from 'redux';
import animeReducer from './anime';

const store = createStore(animeReducer);

export default store;
