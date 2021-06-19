import { combineReducers } from 'redux';
import searchbar from './searchbar';
import battlecards from './battlecards';

export default combineReducers({
  searchbar,
  battlecards,
});
