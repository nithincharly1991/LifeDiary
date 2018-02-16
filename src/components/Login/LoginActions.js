/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 13:03:39
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-06 13:06:40
*/

// import { AUTH_TOKEN } from '../../constants/keys'
// import * as Socket from '../../utils/SocketIO'
import * as actions from '../../constants/actions';
// import HTTPHandler from '../../utils/HttpOps';
// import { checkServerIdentity } from 'tls';
import {AsyncStorage} from 'react-native';

export default function (dispatch) {

    return {

        async login(username, password) {
            /*dispatch({
                type: actions.SUBMIT_LOGIN,
                username,
                password
            })

            try {
                let httpOps = new HTTPHandler()
                let { user, token } = await httpOps.post('/signin/mobile-caller', { username, password });

                dispatch({
                    type: actions.LOGIN_SUCCESS,
                    user,
                    token
                });

            } catch (error) {
                dispatch({
                    type: actions.LOGIN_FAIL,
                    message: error.message
                })
            }

            await checkServerIdentity(token)*/
            console.log('login callled...')

        }

        /*async checkActiveSession(token) {
            if (!token) {
                try {
                    token = await AsyncStorage.getItem(AUTH_TOKEN);
                    if (token) {
                        // We have data!!
                        console.log(response);
                    }
                } catch (error) {
                    console.log(error);
                    // Error retrieving data
                }
            }
            try {
                await Socket.applyToken(token);
            } catch (e) {
                AsyncStorage.removeItem(AUTH_TOKEN);
                dispatch({
                    type: actions.SET_
                })
            }
            return dispatch({ type: actions.SET_LOGIN_VISIBLE })

        }*/
    }
}
