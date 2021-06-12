import { StoreState } from '../types';

export const selectFact = (state: StoreState): string | null =>
  state.numberFact.fact;
