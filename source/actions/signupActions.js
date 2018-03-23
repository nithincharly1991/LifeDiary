/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-28 10:58:04
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-03-06 11:03:20
*/
import * as types from './actiontypes';
import HTTPHandler from '../utils/HttpOps';

export default function(dispatch){
	return {
		async changeAppRoot(route) {
		  dispatch({
		  	type: types.ROOT_CHANGED,
		  	root:route
		  })
		},

		async login(){
			this.changeAppRoot('after-login');
		},

		async newUser(){
			this.changeAppRoot('signup');
		},
		async onSingUpPress(state){
			console.log('on signup press called.....',state)
			if(state.password == state.confirmPassword){
			   let dataToSend = {
			   		email : state.email,
			   		phNo : state.phNo,
			   		password : state.password,
			   		age : state.age,
			   		gender : state.gender,
			   		weight : state.weight,
			   		height : state.height,
			   		waist : state.waist
				}
				try {
				    let httpOps = new HTTPHandler()
				    let response = await httpOps.post('/api/signup', dataToSend);

				    /* dispatch({
				         type: actionTypes.LOGIN_SUCCESS,
				         user,
				         token
				     });

				     await this.getSession(token)*/
				     console.log('after sign up response...',response)

				} catch (error) {
				    /*dispatch({
				        type: actionTypes.LOGIN_FAIL,
				        message: error.message
				    })*/
				}
			}else{
				dispatch({
					type: types.CONFIRM_PASSWORD_ERROR,
					confirmErr:'password does not match'
				})
			}
			// this.changeAppRoot('after-login');
		},
		async onBackBtnPress(){
			this.changeAppRoot('login');
		}

	}
}
