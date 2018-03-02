/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-27 15:36:11
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-27 19:06:27
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
			console.log('login called...')
			this.changeAppRoot('after-login');
		},

		async newUser(){
			this.changeAppRoot('signup');
		}

	}
}
