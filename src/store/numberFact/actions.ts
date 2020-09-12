import axios from 'axios';
import { Action } from 'redux';

import { FACT_FETCHED, StoreNumber } from './types';
import { GetState } from '../types';
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from '../appState/actions';
import { ThunkAction } from 'redux-thunk';

export const factFetched = (fact: string): StoreNumber => {
  return {
    type: FACT_FETCHED,
    fact,
  };
};

// https://bloggie.io/@_ChristineOo/understanding-typings-of-redux-thunk-action
// https://medium.com/@talkol/redux-thunks-dispatching-other-thunks-discussion-and-best-practices-dd6c2b695ecf

export const fetchFact = (
  num: number
): ThunkAction<void, GetState, null, Action<string>> => async (dispatch) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/trivia`);

    const fact = response.data;
    showMessageWithTimeout(dispatch, fact, 1500);
    dispatch(factFetched(fact));

    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
    dispatch(appDoneLoading());
  }
};
