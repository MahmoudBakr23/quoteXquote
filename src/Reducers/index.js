import { combineReducers } from 'redux';
import animeReducer from './anime';
import quoteReducer from './quote';
import searchReducer from './search';

export default combineReducers({ animeReducer, quoteReducer, searchReducer });
