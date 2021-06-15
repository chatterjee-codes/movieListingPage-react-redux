import {
  GET_POPULAR_MOVIES,
  GET_MOVIE_DETAILS,
  MOVIES_ERROR,
} from '../actions/types';

const initialState = {
  movies: [],
  movie: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload,
      };
    case MOVIES_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
