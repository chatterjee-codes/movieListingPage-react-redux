import {
  GET_POPULAR_MOVIES,
  GET_MOVIE_DETAILS,
  ERROR,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  movies: [],
  movie: {},
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false,
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
