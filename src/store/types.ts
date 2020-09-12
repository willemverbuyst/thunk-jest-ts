import { AppState } from './appState/types';
import { FactState } from './numberFact/types';

export type StoreState = {
  numberFact: FactState;
  appState: AppState;
};

export type GetState = () => StoreState;
