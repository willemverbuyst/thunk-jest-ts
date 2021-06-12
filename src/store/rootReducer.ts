import { combineReducers } from 'redux';
import appState from './appState/reducer';
import factState from './factState/reducer';

export default combineReducers({
  appState,
  factState,
});
