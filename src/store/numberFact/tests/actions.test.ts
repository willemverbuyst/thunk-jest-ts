import axios from 'axios';
import { fetchFact, factFetched } from '../actions';

import { FACT_FETCHED, StoreNumber } from '../types';
import {
  appLoading,
  appDoneLoading,
  // showMessageWithTimeout,
} from '../../appState/actions';

const mockAxios = axios as jest.Mocked<typeof axios>;

const fact = 'test_fact';

beforeEach(() => {
  jest.resetAllMocks();
});

describe('#factFetched', () => {
  const action: StoreNumber = {
    type: FACT_FETCHED,
    fact,
  };
  test('should return an object containing type FACT_FETCHED and as a payload the fact', () => {
    expect(factFetched(fact)).toEqual(action);
    expect(factFetched(fact).type).toEqual(action.type);
    expect(factFetched(fact).fact).toEqual(action.fact);
    expect(factFetched(fact).fact).toEqual(fact);
  });
});

describe('#fetchFact', () => {
  it('calls axios and returns fact', async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const extra = null;
    const response = { data: fact };
    const num = 1;

    mockAxios.get.mockImplementationOnce(() => Promise.resolve(response));

    await fetchFact(num)(dispatch, getState, extra);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(appLoading());
    expect(dispatch).toHaveBeenCalledWith(factFetched(fact));
    expect(dispatch).toHaveBeenCalledWith(appDoneLoading());
    expect(dispatch).toHaveBeenCalledTimes(4);
  });
});
