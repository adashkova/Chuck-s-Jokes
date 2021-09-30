import { SET_LOADING, GET_JOKE, GET_JOKES, JOKE_ERROR } from '../actions/types';

const initialState = {
  jokes: [],
  loading: true,
  error: undefined,
};

export const jokes = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_JOKE:
      return {
        ...state,
        jokes: [payload, ...state.jokes],
        loading: false,
      };
    case GET_JOKES:
      return {
        ...state,
        jokes: [...payload, ...state.jokes],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case JOKE_ERROR:
      return {
        ...state,
        error: payload,
        loading: true,
      };

    default:
      return state;
  }
};
