import { combineReducers } from 'redux';
import appState from './appState/reducer';
import numberFactReducer from './numberFact/reducer';

export default combineReducers({
  appState,
  numberFactReducer,
});
