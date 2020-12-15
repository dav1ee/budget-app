import { combineReducers } from 'redux';

import income from './income';
import expense from './expense';

const rootReducer = combineReducers({
  income,
  expense,
});

export default rootReducer;
