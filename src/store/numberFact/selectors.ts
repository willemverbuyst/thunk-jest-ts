import { State } from './types';

export const selectFact = (state: State) => {
  return state.data.fact;
};
