import * as types from './actiontypes';
import HTTPHandler from '../utils/HttpOps';
import { AsyncStorage } from 'react-native';

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
        const value = await AsyncStorage.getItem('AUTH_TOKEN');
        if (value !== null){
			dispatch(changeAppRoot('after-login'));
        }else{
        	dispatch(changeAppRoot('login'));
        }
    };
}

export function newUser() {
    return async function(dispatch, getState) {
        dispatch(changeAppRoot('signup'));
    };
}

export function login() {
    return async function(dispatch, getState) {
        let username = 'nithin',
            password = '123456789';
        try {
            let httpOps = new HTTPHandler()
            let { user, token } = await httpOps.post('/login', { username, password });

            /* dispatch({
                 type: actionTypes.LOGIN_SUCCESS,
                 user,
                 token
             });

             await this.getSession(token)*/

        } catch (error) {
            /*dispatch({
                type: actionTypes.LOGIN_FAIL,
                message: error.message
            })*/
        }
        // login logic would go here, and when it's done, we switch app roots
        dispatch(changeAppRoot('after-login'));
    };
}

export function testServerCommunication() {

}

/*export function testClick(){
  console.log('touch clicked. fffff.');
}*/
