import { APP_DONE_LOADING, APP_LOADING, CLEAR_MESSAGE, SET_MESSAGE } from '../action-types';
import { appDoneLoading, appLoading, clearMessage, setMessage, showMessageWithTimeout } from '../actions';

describe('appState', () => {
  describe('#setMessage', () => {
    const text = 'test_text';
    const expected = {
      type: SET_MESSAGE,
      payload: text,
    };
    test('should return an object containing type SET_MESSAGE and as payload the text', () => {
      expect(setMessage(text)).toEqual(expected);
      expect(setMessage(text).type).toBe(expected.type);
      expect(setMessage(text).payload).toEqual(expected.payload);
      expect(clearMessage().type).not.toBeNull();
    });
  });
  describe('#clearMessage', () => {
    const expected = {
      type: CLEAR_MESSAGE,
    };
    test('should return an action object with type #CLEAR_MESSAGE and no payload', () => {
      expect(clearMessage()).toEqual(expected);
      expect(clearMessage().type).toBe(expected.type);
      expect(clearMessage().type).not.toBeUndefined();
    });
  });
  describe('#appLoading', () => {
    const expected = {
      type: APP_LOADING,
    };
    test('should return an action type #APP_LOADING', () => {
      expect(appLoading()).toEqual(expected);
      expect(appLoading().type).toBe(expected.type);
      expect(appLoading().type).not.toBeUndefined();
    });
  });
  describe('#appDoneLoading ', () => {
    const expected = {
      type: APP_DONE_LOADING,
    };
    test('should return an action type #APP_DONE_LOADING', () => {
      expect(appDoneLoading()).toEqual(expected);
      expect(appDoneLoading().type).toBe(expected.type);
      expect(appDoneLoading().type).not.toBeUndefined();
    });
  });
  describe('#showMessageWithTimeout', () => {
    test('should dispatch an action set message', async () => {
      const text = 'test_text';
      const timeOutMilliSeconds = 1000;
      const dispatch = jest.fn();
      showMessageWithTimeout(dispatch, text, timeOutMilliSeconds);
      expect(dispatch).toHaveBeenCalledWith(setMessage(text));
      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
