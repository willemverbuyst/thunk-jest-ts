export enum ActionType {
  APP_LOADING = 'APP_LOADING',
  APP_DONE_LOADING = 'APP_DONE_LOADING',
  SET_MESSAGE = 'SET_MESSAGE',
  CLEAR_MESSAGE = 'CLEAR_MESSAGE',
}

export type AppLoading = {
  type: ActionType.APP_LOADING;
};

export type AppDoneLoading = {
  type: ActionType.APP_DONE_LOADING;
};

export type ClearMessage = {
  type: ActionType.CLEAR_MESSAGE;
};

export type SetMessage = {
  type: ActionType.SET_MESSAGE;
  payload: string;
};

export type AppStateActions = AppLoading | AppDoneLoading | ClearMessage | SetMessage;
