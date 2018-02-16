/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 12:09:09
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-06 16:55:35
*/

import { createReducer } from '../utils/ReducerOps';
import * as actions from '../constants/actions';

let initialState = {};


export const loginStatus = createReducer({

    [actions.SUBMIT_LOGIN](state, action) {
        let newState = { inprogress: true, visible: true, user: { username: action.username } }
        return newState;
    },

    [actions.LOGIN_SUCCESS](state, action) {
        let newState = { user: action.user, token: action.token }
        return newState;
    },

    [actions.LOGIN_FAIL](state, action) {
        return { username: action.username, visible: true };
    },
}, initialState)
