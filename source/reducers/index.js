import {root} from './rootReducer';
import {loginStatus} from './loginReducer';
import {question} from './questionReducer';
/*
This file exports the reducers as an object which
will be passed onto combineReducers method at src/app.js
*/
export {
    root,
    loginStatus,
    question
}
