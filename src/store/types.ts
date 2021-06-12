import { IAppState } from './appState/reducer';
import { IFactState } from './factState/reducer';

export type StoreState = {
  numberFact: IFactState;
  appState: IAppState;
};

export type GetState = () => StoreState;
