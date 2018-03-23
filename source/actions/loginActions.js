/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-27 15:36:11
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-03-09 10:56:08
*/
import * as types from './actiontypes';
import HTTPHandler from '../utils/HttpOps';
import { AsyncStorage } from 'react-native';

export default function(dispatch){
	return {
		async changeAppRoot(route) {
		  dispatch({
		  	type: types.ROOT_CHANGED,
		  	root:route
		  })
		},

		async login(username,password){
			console.log('login called...')
			// this.changeAppRoot('after-login');
			let dataToSend = {
				userName : username,
				password : password
			}
			try {
				let httpOps = new HTTPHandler()
				let response = await httpOps.post('/api/login', dataToSend);
				console.log('response....',response)
				if(response.msg == "success" && response.token){
					console.log('inside ifffffff')
					// this.changeAppRoot('after-login');
					AsyncStorage.setItem('AUTH_TOKEN', response.token).then((value,err)=>{
						console.log('asyncsStorageRes----------->>>>>>>',value,err)
						this.changeAppRoot('after-login');
					})
					// console.log('asyncsStorageRes----------->>>>>>>')
				}
				/* dispatch({
				type: actionTypes.LOGIN_SUCCESS,
				user,
				token
				});

				await this.getSession(token)*/
				console.log('after login response...',response)

			} catch (error) {
			/*dispatch({
			type: actionTypes.LOGIN_FAIL,
			message: error.message
			})*/
			}
		},

		async newUser(){
			this.changeAppRoot('signup');
		}

	}
}
