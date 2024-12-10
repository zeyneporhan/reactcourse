import { combineReducers } from 'redux';
import counterReducer from './counterReducer';  // Counter reducer'ınız

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
