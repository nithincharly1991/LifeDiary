/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-03-06 18:20:43
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-03-20 15:02:56
*/
import * as types from '../actions/actiontypes';

const initialState ={}

export function question(state = initialState, action = {}){
	switch (action.type) {

	  case types.QUESTION_FETCHED :
		/*return ({questions : action.questions})*/
		return {...state,questions : action.questions}

	  case types.ANSWER_SELECTED :
	  /*return ({
	  	selectedAns : action.selectedAns
	  });*/
	  return {...state,selectedAns : action.selectedAns}
	  case types.COMMENT_CHANGE :
	  /*return ({
	  	comment : action.comment
	  })*/
	  return {...state,comment : action.comment}
	  case types.NEXT_ANSWER :
	  return {...state,selectedAns:action.answer,comment:action.comment}
	  default:
	    return state;
	}
}
