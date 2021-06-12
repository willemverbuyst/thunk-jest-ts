import axios, { AxiosResponse } from 'axios';
import { Dispatch } from 'redux';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { showMessageWithTimeout } from '../appState/action-creators';
import { AppStateActions } from '../appState/action-types';
import { appDoneLoading, appLoading } from '../appState/actions';
import { GetState } from '../types';
import { FactStateActions } from './action-types';
import { factFetched } from './actions';

// https://bloggie.io/@_ChristineOo/understanding-typings-of-redux-thunk-action
// https://medium.com/@talkol/redux-thunks-dispatching-other-thunks-discussion-and-best-practices-dd6c2b695ecf

export const fetchFact =
  (num: number): ThunkAction<void, GetState, null, Action<string>> =>
  async (dispatch: Dispatch<AppStateActions | FactStateActions>) => {
    dispatch(appLoading());
    try {
      const response: AxiosResponse<string> = await axios.get<string>(`http://numbersapi.com/${num}/trivia`);

      const fact = response.data;
      showMessageWithTimeout(dispatch, fact, 2500);

      dispatch(factFetched(fact));
      dispatch(appDoneLoading());
    } catch (error) {
      console.log(error);
      dispatch(appDoneLoading());
    }
  };
