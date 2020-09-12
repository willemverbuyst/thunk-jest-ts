import { combineReducers } from 'redux';
import appState from './appState/reducer';
import numberFact from './numberFact/reducer';

export default combineReducers({
  appState,
  numberFact,
});
