import {
  ActionType,
  AppLoading,
  AppDoneLoading,
  ClearMessage,
  SetMessage,
} from './action-types';

export const appLoading = (): AppLoading => ({ type: ActionType.APP_LOADING });

export const appDoneLoading = (): AppDoneLoading => ({
  type: ActionType.APP_DONE_LOADING,
});

export const clearMessage = (): ClearMessage => ({
  type: ActionType.CLEAR_MESSAGE,
});

export const setMessage = (text: string): SetMessage => {
  return {
    type: ActionType.SET_MESSAGE,
    payload: text,
  };
};
