import { IAppState } from './appState/reducer';
import { FactState } from './numberFact/types';

export type StoreState = {
  numberFact: FactState;
  appState: IAppState;
};

export type GetState = () => StoreState;
