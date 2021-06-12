import { ActionType, StoreNumber } from '../action-types';
import { factFetched } from '../actions';

describe('#factFetched', () => {
  const fact = 'test_fact';
  const action: StoreNumber = {
    type: ActionType.FACT_FETCHED,
    payload: fact,
  };
  test('should return an action w/ type FACT_FETCHED and a payload', () => {
    expect(factFetched(fact)).toEqual(action);
    expect(factFetched(fact).type).toEqual(ActionType.FACT_FETCHED);
    expect(factFetched(fact).payload).toEqual(fact);
  });
});
