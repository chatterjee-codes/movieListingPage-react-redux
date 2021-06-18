import { GET_SHOWS, GET_SHOW_DETAILS, ERROR, SET_LOADING } from './types';
import axios from 'axios';

require('dotenv').config();

let api_key;

if (process.env.NODE_ENV !== 'production') {
  api_key = process.env.REACT_APP_API_KEY;
} else {
  api_key = process.env.API_KEY;
}

// Get TV Shows
export const getShows = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`
    );

    dispatch({
      type: GET_SHOWS,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response,
    });
  }
};

// Get movie details by ID
export const getShowDetails = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}`
    );
    dispatch({
      type: GET_SHOW_DETAILS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err.response,
    });
  }
};

//set loading
export const setLoading = () => (dispatch) => ({ type: SET_LOADING });
