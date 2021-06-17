import {
  GET_SHOWS,
  GET_SHOW_DETAILS,
  ERROR,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  shows: [],
  show: {},
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state,
        shows: action.payload,
        loading: false,
      };
    case GET_SHOW_DETAILS:
      return {
        ...state,
        show: action.payload,
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
