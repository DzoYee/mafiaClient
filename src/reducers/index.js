import { combineReducers } from 'redux';
import TestReducer from './reducer_test';

const rootReducer = combineReducers({
  stuff: TestReducer
});

export default rootReducer;