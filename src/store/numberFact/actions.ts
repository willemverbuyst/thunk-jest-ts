import axios from 'axios';

import { FACT_FETCHED, StoreNumber } from './types';
import { GetState } from '../types';
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from '../appState/actions';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

const factFetched = (fact: string): StoreNumber => {
  return {
    type: FACT_FETCHED,
    fact,
  };
};

// https://bloggie.io/@_ChristineOo/understanding-typings-of-redux-thunk-action

export const fetchFact = (
  num: number
): ThunkAction<void, GetState, unknown, Action<string>> => async (dispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/trivia`);

    const fact = response.data;
    dispatch(showMessageWithTimeout(fact, 1500));
    dispatch(factFetched(fact));

    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
    dispatch(appDoneLoading());
  }
};
