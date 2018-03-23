/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-03-06 12:47:30
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-03-23 16:57:25
*/
import * as types from './actiontypes';
import HTTPHandler from '../utils/HttpOps';
import { AsyncStorage } from 'react-native';
import moment from 'moment';
// const token = await AsyncStorage.getItem('AUTH_TOKEN');

import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({name:"lifediary.db"});

export default function (dispatch){

	return{
		async getQuestion(){
			console.log('get question called....')

			db.executeSql('SELECT * FROM `questionLog`',[],(results)=>{
				let len = results.rows.length;
				console.log('result length............',len,results.rows)
				if(len>0){
					for (let i = 0;i<len;i++){
						let row = results.rows.item(i);
						console.log('result from sqlite....',row)
					}
				}
			},(err)=>{
				console.log('fetch error....',err)
			})

			try {
				let token = await AsyncStorage.getItem('AUTH_TOKEN');
			    let httpOps = new HTTPHandler(token)
			    let questions = await httpOps.get('/api/getQuestions');
				dispatch({
					type: types.QUESTION_FETCHED,
					questions:questions
				});

			} catch (error) {
				console.log('error',error)
			    /*dispatch({
			        type: actionTypes.LOGIN_FAIL,
			        message: error.message
			    })*/

			}
		},

		async selectAnswer(option){
			dispatch({
				type : types.ANSWER_SELECTED,
				selectedAns : option
			})

		},
		async resetSelectedAnswer(){
			dispatch({
				type : types.ANSWER_SELECTED,
				selectedAns : ''
			})
		},

		async errorCB(err) {
		  console.log("SQL Error: " ,err);
		},

		async openCB() {
		  console.log("Database OPENED");
		},

		async successCB() {
		  console.log("query executed successfully..")
		},

		async closeCB() {
		  console.log("Database closed...")
		},

		async querySuccess(results){
		    	console.log('results.rows.item....................----------********',results.rows.length)
		    	let len = results.rows.length;
		    	if(len>0){
		    		for (let i = 0;i<len;i++){
		    			let row = results.rows.item(i);
		    			console.log('result from sqlite....',row)
		    		}
		    	}
		 },

		async saveAnswer(data){
			let currentDate = new Date();
			let startDateWith = moment(currentDate).set({hour: 0, minute: 0, second: 0, millisecond: 0}).format("YYYY-MM-DD HH:mm:ss");
			let endDateWith = moment(currentDate).set({hour: 23, minute: 59, second: 59, millisecond:0}).format("YYYY-MM-DD HH:mm:ss");
			let frmtdCurrentDate = moment(currentDate).format("YYYY-MM-DD HH:mm:ss");
			console.log('save answer called...--------->>>>',currentDate,startDateWith,endDateWith);
			/*var db = SQLite.openDatabase({name:"lifediary.db"}, this.openCB, this.errorCB);*/
				db.executeSql('SELECT _id FROM questionLog WHERE questionId = "'+data.questionId+'" AND date BETWEEN "'+startDateWith+'" AND "'+endDateWith+'"',[],(results)=>{
					let len = results.rows.length;
					console.log('result of select inside save answer....',len)
					if(len>0){
						let row = results.rows.item(0);
						console.log('result from sqlite....',row)
						db.executeSql('UPDATE questionLog SET answer = "'+data.answer+'",comment = "'+data.comment+'",date = "'+frmtdCurrentDate+'" WHERE _id = "'+row._id+'"',[],this.successCB,this.errorCB);
					}else{
						db.executeSql('INSERT INTO questionLog (questionId,answer,comment,date) VALUES ("'+data.questionId+'","'+data.answer+'","'+data.comment+'","'+frmtdCurrentDate+'");', [],this.successCB,this.errorCB)
					}
				},(err)=>{
					console.log('error at save answer select query....',err)
					db.executeSql('INSERT INTO questionLog (questionId,answer,comment) VALUES ("'+data.questionId+'","'+data.answer+'","'+data.comment+'","'+frmtdCurrentDate+'");', [],this.successCB,this.errorCB)
				})
		        /*db.transaction((tx) => {
		        	console.log('before execute sql.....')
		        	tx.executeSql('INSERT INTO questionLog (questionId,answer,comment) VALUES ("'+data.questionId+'","'+data.answer+'","'+data.comment+'");', [],this.successCB,this.errorCB);

		    	});*/
			try {
				let token = await AsyncStorage.getItem('AUTH_TOKEN');
			    let httpOps = new HTTPHandler(token)
			    let saveAnswer = await httpOps.post('/api/saveAnswer', data);
			} catch(error){
				console.log('error',error)
			}

		},
		async onChangeComment(text){
			// console.log('comments..-------------->>>>>>',text);
			dispatch({
				type : types.COMMENT_CHANGE,
				comment:text
			})
		},
		async setNextAnswer(answer,comment){
			dispatch({
				type: types.NEXT_ANSWER,
				answer:answer,
				comment:comment
			})
		}
	}
}
