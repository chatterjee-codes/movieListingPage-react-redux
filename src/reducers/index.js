import { combineReducers } from 'redux';
import movieReducer from './movieReducer';
import showReducer from './showReducer';

export default combineReducers({
  movie: movieReducer,
  show: showReducer,
});
