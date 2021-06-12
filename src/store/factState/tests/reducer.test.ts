import reducer from '../reducer';
import { FACT_FETCHED, FactState } from '../action-types';

describe('#fetchFact', () => {
  const initialState: FactState = {
    fact: null,
  };
  describe('with initial state and #FACT_FETCHED action', () => {
    test('returns the new state with fact', () => {
      const newState: FactState = reducer(initialState, {
        type: FACT_FETCHED,
        fact: 'test_fact',
      });
      expect(newState).toEqual({ fact: 'test_fact' });
      expect(newState).not.toEqual(initialState);
    });
  });
});
