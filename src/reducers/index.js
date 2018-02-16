import { combineReducers } from 'redux';
import * as loginReducer from './loginReducer'
import * as rootReducer from './rootReducer'


export default combineReducers(Object.assign(
  loginReducer,
  rootReducer,
));
