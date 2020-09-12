import { Dispatch } from 'redux';
import {
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  AppLoading,
  AppDoneLoading,
  ClearMessage,
  SetMessage,
} from './types';

const DEFAULT_MESSAGE_TIMEOUT = 2000;

export const appLoading = (): AppLoading => ({ type: APP_LOADING });

export const appDoneLoading = (): AppDoneLoading => ({
  type: APP_DONE_LOADING,
});

export const clearMessage = (): ClearMessage => ({ type: CLEAR_MESSAGE });

export const setMessage = (text: string): SetMessage => {
  return {
    type: SET_MESSAGE,
    payload: text,
  };
};

export const showMessageWithTimeout = (
  text: string,
  timeOutMilliSeconds: number
) => {
  return (dispatch: Dispatch) => {
    dispatch(setMessage(text));

    const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;

    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};
