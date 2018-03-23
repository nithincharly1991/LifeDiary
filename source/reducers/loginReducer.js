
import * as types from '../actions/actiontypes';

const initialState ={
	confirmErr : false
}

export function loginStatus(state = initialState, action = {}){
	switch (action.type) {

	  case types.CONFIRM_PASSWORD_ERROR :
	  console.log('confirm eerror reducer called...')
	    return ({
	      confirmErr: action.confirmErr
	    });

	  default:
	    return state;
	}
}
