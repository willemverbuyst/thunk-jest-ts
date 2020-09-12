import { FACT_FETCHED, StoreNumber, FactState } from './types';

const initialState: FactState = {
  fact: null,
};

export default (state = initialState, action: StoreNumber) => {
  switch (action.type) {
    case FACT_FETCHED:
      return { ...state, fact: action.fact };

    default:
      return state;
  }
};
