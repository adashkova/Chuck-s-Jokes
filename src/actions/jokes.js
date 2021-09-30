import { SET_LOADING, GET_JOKE, GET_JOKES, JOKE_ERROR } from './types';
import axios from 'axios';

export const getJoke = () => async dispatch => {
  dispatch({ type: SET_LOADING });

  try {
    const res = await axios.get(`https://api.chucknorris.io/jokes/random`);

    let jokes = JSON.parse(localStorage.getItem('jokes'));
    if (jokes === null) {
      jokes = [];
    }

    jokes.unshift(res.data.value);

    localStorage.setItem('jokes', JSON.stringify(jokes));

    dispatch({
      type: GET_JOKE,
      payload: res.data.value,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: JOKE_ERROR,
      payload: 'Sorry, server do not response!',
    });
  }
};

export const getJokes = () => dispatch => {
  dispatch({
    type: SET_LOADING,
  });

  if (!JSON.parse(localStorage.getItem('jokes'))) {
    return [];
  }

  const oldJokes = JSON.parse(localStorage.getItem('jokes'));

  dispatch({
    type: GET_JOKES,
    payload: oldJokes,
  });
};
