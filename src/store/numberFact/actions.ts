import axios from 'axios';

import { Dispatch } from 'redux';
import { FACT_FETCHED, GetState, StoreNumber } from './types';

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
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/trivia`);

    const fact = response.data;
    dispatch(factFetched(fact));
  } catch (error) {
    console.log(error);
  }
};
