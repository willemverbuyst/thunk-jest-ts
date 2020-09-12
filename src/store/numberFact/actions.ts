import axios from 'axios';

import { Dispatch } from 'redux';
import { FACT_FETCHED, GetState, StoreNumber } from './types';

const factFetched = (num: number, fact: string): StoreNumber => {
  return {
    type: FACT_FETCHED,
    data: { num, fact },
  };
};

export const fetchFact = (num: number) => async (
  dispatch: Dispatch,
  _getState: GetState
) => {
  console.log(num);
  try {
    const response = await axios.get(`http://numbersapi.com/${num}/trivia`);

    const fact = response.data;
    console.log(fact);
    dispatch(factFetched(num, fact));
  } catch (error) {
    console.log(error);
  }
};
