import { combineReducers } from 'redux';
import animeReducer from './anime';
import quoteReducer from './quote';

export default combineReducers({ animeReducer, quoteReducer });
