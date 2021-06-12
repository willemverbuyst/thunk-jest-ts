import { ActionType, FactStateActions } from './action-types';

export interface IFactState {
  fact: string | null;
}

const initialState: IFactState = {
  fact: null,
};

const factStateReducer = (state = initialState, action: FactStateActions) => {
  switch (action.type) {
    case ActionType.FACT_FETCHED:
      return { ...state, fact: action.payload };

    default:
      return state;
  }
};

export default factStateReducer;
