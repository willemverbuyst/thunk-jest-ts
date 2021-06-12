import { ActionType, StoreNumber } from './action-types';

export const factFetched = (fact: string): StoreNumber => {
  return {
    type: ActionType.FACT_FETCHED,
    payload: fact,
  };
};
