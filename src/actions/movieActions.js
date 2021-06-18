import {
  GET_MOVIE_DETAILS,
  GET_POPULAR_MOVIES,
  ERROR,
  SET_LOADING,
} from './types';

import axios from 'axios';
require('dotenv').config();

let api_key = '74b37141b7123c803bb6a7f66e9bf313';

// if (process.env.NODE_ENV !== 'production') {
//   api_key = process.env.REACT_APP_API_KEY;
// } else {
//   api_key = process.env.API_KEY;
// }

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
      type: ERROR,
      payload: err.response.statustext,
    });
  }
};

// Get movie details by ID
export const getMovieDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`
    );
    dispatch({
      type: GET_MOVIE_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response.statustext,
    });
  }
};

//set loading
export const setLoading = () => (dispatch) => ({ type: SET_LOADING });
