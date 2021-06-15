import { GET_POPULAR_MOVIES, MOVIES_ERROR } from '../actions/types';

const initialState = {
  movies: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POPULAR_MOVIES:
      return {
        ...state,
        movies: action.payload,
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
