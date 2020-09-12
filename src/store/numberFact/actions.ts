import axios from 'axios';

import { Dispatch } from 'redux';
import { FACT_FETCHED, StoreNumber } from './types';
import { GetState } from '../types';
import {
  appLoading,
  appDoneLoading,
  showMessageWithTimeout,
} from '../appState/actions';

const factFetched = (fact: string): StoreNumber => {
  return {
    type: FACT_FETCHED,
    fact,
  };
};

export const fetchFact = (num: number) => async (
  dispatch: Dispatch,
  _getState: GetState
) => {
  dispatch(appLoading());
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/trivia`);

    const fact = response.data;
    dispatch<any>(showMessageWithTimeout(fact, 1500));
    dispatch(factFetched(fact));

    dispatch(appDoneLoading());
  } catch (error) {
    console.log(error);
    dispatch(appDoneLoading());
  }
};
