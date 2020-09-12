import { StoreState } from '../types';

export const selectFact = (state: StoreState) => {
  return state.numberFact.fact;
};
