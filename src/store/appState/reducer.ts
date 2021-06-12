import { ActionType, AppStateActions } from './action-types';

export interface IAppState {
  loading: boolean;
  message: string | null;
}

const initialState: IAppState = {
  loading: false,
  message: null,
};

const appStateReducer = (state = initialState, action: AppStateActions): IAppState => {
  switch (action.type) {
    case ActionType.APP_LOADING:
      return { ...state, loading: true };

    case ActionType.APP_DONE_LOADING:
      return { ...state, loading: false };

    case ActionType.SET_MESSAGE:
      return { ...state, message: action.payload };

    case ActionType.CLEAR_MESSAGE:
      return { ...state, message: null };

    default:
      return state;
  }
};

export default appStateReducer;
