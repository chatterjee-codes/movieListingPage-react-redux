import { GET_SHOWS, GET_SHOW_DETAILS, ERROR } from '../actions/types';

const initialState = {
  shows: [],
  show: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOWS:
      return {
        ...state,
        shows: action.payload,
      };
    case GET_SHOW_DETAILS:
      return {
        ...state,
        show: action.payload,
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
