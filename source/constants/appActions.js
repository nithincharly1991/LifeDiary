/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-08 17:02:04
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-09 12:17:15
*/

import * as types from './actions';

/*
Action Creators
*/

export function changeAppRoot(root) {
  return {
    type: types.ROOT_CHANGED,
    root: root
  };
}

/*
dispatch the actionCreators
*/

export function appInitialized() {
  return async function(dispatch, getState) {
    // since all business logic should be inside redux actions
    // this is a good place to put your app initialization code
    dispatch(changeAppRoot('login'));
  };
}

export function login() {
  return async function(dispatch, getState) {
    // login logic would go here, and when it's done, we switch app roots
    dispatch(changeAppRoot('after-login'));
  };
}

