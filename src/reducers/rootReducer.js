/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-08 15:12:56
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-08 15:32:46
*/

import { createReducer } from '../utils/ReducerOps';
import * as actions from '../constants/actions';

let initialState = {};


export const loginStatus = createReducer({

    [actions.ROOT_CHANGED](state, action) {
        let newState = { root:  action.root}
        return newState;
    },

}, initialState)
