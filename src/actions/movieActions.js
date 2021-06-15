import { GET_POPULAR_MOVIES, MOVIES_ERROR } from './types';
import axios from 'axios';

let api_key = '74b37141b7123c803bb6a7f66e9bf313';

// Get popular movies from API
export const getPopularMovies = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc&page=1`
    );
    dispatch({
      type: GET_POPULAR_MOVIES,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: MOVIES_ERROR,
      payload: err.response.statustext,
    });
  }
};
