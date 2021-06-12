import { Dispatch } from 'redux';
import { DEFAULT_MESSAGE_TIMEOUT } from '../../constants/message-timeout';
import { AppStateActions } from './action-types';
import { setMessage, clearMessage } from './actions';

export const showMessageWithTimeout = (
  dispatch: Dispatch<AppStateActions>,
  text: string,
  timeOutMilliSeconds: number
): void => {
  dispatch(setMessage(text));

  const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;

  setTimeout(() => dispatch(clearMessage()), timeout);
};
