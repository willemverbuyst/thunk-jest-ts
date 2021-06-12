import axios from 'axios';

import {
  appDoneLoading,
  appLoading,
  // showMessageWithTimeout,
  setMessage,
} from '../../appState/actions';
import { fetchFact } from '../action-creator';
import { factFetched } from '../actions';

const mockAxios = axios as jest.Mocked<typeof axios>;

const fact = 'test_fact';

beforeEach(() => {
  jest.resetAllMocks();
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
    expect(dispatch).toHaveBeenCalledWith(setMessage(fact));
    expect(dispatch).toHaveBeenCalledWith(appDoneLoading());
    expect(dispatch).toHaveBeenCalledTimes(4);
  });
});
