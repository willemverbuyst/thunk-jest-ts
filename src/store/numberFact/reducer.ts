import { FACT_FETCHED, StoreNumber, StoreState } from './types';

const initialState: StoreState = {
  fact: undefined,
};

export default (state = initialState, action: StoreNumber) => {
  switch (action.type) {
    case FACT_FETCHED:
      return { fact: action.fact };

    default:
      return state;
  }
};
