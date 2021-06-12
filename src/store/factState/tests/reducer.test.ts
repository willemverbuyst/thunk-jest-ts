import { ActionType } from '../action-types';
import reducer, { IFactState } from '../reducer';

describe('#factStateReducer', () => {
  describe('w/ initial state and FACT_FETCHED action ', () => {
    const initialState: IFactState = {
      fact: null,
    };
    const newState: IFactState = reducer(undefined, {
      type: ActionType.FACT_FETCHED,
      payload: 'test',
    });

    test('returns a state with teachers', () => {
      expect(newState).not.toEqual(initialState);
      expect(newState.fact).not.toBeNull();
      expect(newState.fact).toEqual('test');
    });
  });
});
