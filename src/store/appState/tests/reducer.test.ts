import reducer from '../reducer';
import {
  APP_LOADING,
  APP_DONE_LOADING,
  SET_MESSAGE,
  CLEAR_MESSAGE,
  AppLoading,
  AppDoneLoading,
  ClearMessage,
  SetMessage,
} from '../types';

describe('#appStateReducer', () => {
  const initialState = {
    loading: false,
    message: null,
  };
  describe('if given no state and #APP_LOADING', () => {
    test('returns the inital state', () => {
      const newState = reducer(undefined, { type: APP_LOADING });
      expect(newState).not.toEqual(initialState);
      expect(newState.loading).toBe(true);
      expect(newState.message).toBeNull();
    });
  });
  describe('when given #APP_LOADING action type', () => {
    test('returns a new state with loading set to true', () => {
      const action: AppLoading = { type: APP_LOADING };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({ loading: true, message: null });
      expect(newState.loading).toBe(true);
    });
  });
  describe('if given no state and #APP_DONE_LOADING', () => {
    test('returns the inital state', () => {
      const newState = reducer(undefined, { type: APP_DONE_LOADING });
      expect(newState).toEqual(initialState);
      expect(newState.loading).toBe(false);
      expect(newState.message).toBeNull();
    });
  });
  describe('when given #APP_DONE_LOADING action type', () => {
    test('returns a new state with loading set to false', () => {
      const action: AppDoneLoading = { type: APP_DONE_LOADING };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({ loading: false, message: null });
      expect(newState.loading).toBe(false);
    });
  });
  describe('when given a #SET_MESSAGE action type', () => {
    test('returns a new state with the payload containing correct values', () => {
      const text = 'test_message';
      const action: SetMessage = {
        type: SET_MESSAGE,
        payload: text,
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({
        loading: false,
        message: action.payload,
      });
      expect(newState.message).toBe(action.payload);
      expect(newState.loading).toBe(false);
    });
  });
  describe('when initialState given a #CLEAR_MESSAGE action type', () => {
    test('returns a new state with the message set to null', () => {
      const action: ClearMessage = { type: CLEAR_MESSAGE };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({ loading: false, message: null });
      expect(newState.message).toBeNull();
      expect(newState.loading).toBe(false);
    });
  });
  describe('when a state given a #CLEAR_MESSAGE action type', () => {
    test('returns a new state with the message set to null', () => {
      const state = { loading: false, message: 'test_message' };
      const action: ClearMessage = { type: CLEAR_MESSAGE };
      const newState = reducer(state, action);
      expect(newState).toEqual({ loading: false, message: null });
      expect(newState.message).toBeNull();
      expect(newState.loading).toBe(false);
    });
  });
});
