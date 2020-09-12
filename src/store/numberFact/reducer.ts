import { FACT_FETCHED, StoreNumber, State } from './types';

const initialState: State = {
  data: { num: undefined, fact: undefined },
};

export default (state = initialState, action: StoreNumber) => {
  switch (action.type) {
    case FACT_FETCHED:
      return { data: action.data };

    default:
      return state;
  }
};
