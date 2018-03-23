import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from 'react-native';

import {
  Input,
  Button
} from '../widgets';

import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
import * as  appActions from '../../actions/index';
import questionActions from '../../actions/questionActions';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import QuestionScreen from './questionScreen';

import SQLite from 'react-native-sqlite-storage';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

class HomeScreen extends Component {


    constructor(props) {
      super(props)
      // this.nextScreen = this.nextScreen.bind(this);
      this.state = {
        index: 0,
        routes: [],
        loading: true,
        currentQuestion: '',
        firstTime : true,
      };

    }

    errorCB(err) {
      console.log("SQL Error: " + err);
    }

    successCB() {
      console.log("SQL executed fine");
    }

    openCB() {
      console.log("Database OPENED");
    }

    componentDidMount(){
        this.props.getQuestion();
        // console.log('this.props.question at component mount..',this.props.question)
        /*var db = SQLite.openDatabase({name:"lifediary.db"}, this.openCB, this.errorCB);
        db.transaction((tx) => {
        	console.log('before execute sql.....')
        	// tx.executeSql('CREATE TABLE `questionLog` (`question`	TEXT,`answer`	TEXT);')
        	tx.executeSql('INSERT INTO questionLog (question,answer) VALUES ("Sylvester Stallone","bad");', []);
        	tx.executeSql('SELECT * FROM `questionLog`',[],this.querySuccess,(err)=>{
        		console.log('query error...........',err)
        	})
    	});*/
    }

   querySuccess(tx,results){
       	console.log('results.rows.item....................----------********',results.rows.length)
       	let len = results.rows.length;
       	if(len>0){
       		for (let i = 0;i<len;i++){
       			let row = results.rows.item(i);
       			console.log('result from sqlite....',row)
       		}
       	}
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.question.questions && nextProps.question.questions.length){
          this.state.routes = [];
          nextProps.question.questions.forEach((eachQuestion,index) => {
            this.state.routes.push({
              key: eachQuestion.questionId,
              question: eachQuestion.question,
              category: eachQuestion.category,
              answer: eachQuestion.answer,
              comment : eachQuestion.comment,
            });
          });
          if((this.state.routes[0].answer || this.state.routes[0].comment) && this.state.firstTime){
          	this.state.firstTime =false;
          	this.props.setNextAnswer(this.state.routes[0].answer,this.state.routes[0].comment);
          }
        }
        this.setState({
          loading: false
        })
    }

  	_handleIndexChange = index => this.setState({ index });

    _renderHeader = (props) => {
        return (
			<View style={styles.nextPrvContainer}>
				<Button style = {[styles.nextBtn,styles.marginLeft]} onPress={()=>this.prevQuestion()}><Text stlye = {styles.text}>Back</Text></Button>
				<View style={styles.paginationDots}>
					<Text style={[styles.blueText,styles.text]}>{this.state.index + 1} </Text><Text stlye = {styles.text}>/ {this.state.routes.length}</Text>
				</View>
				<Button style = {[styles.nextBtn,styles.marginRight]} onPress={() => this.nextQuestion()}><Text stlye = {styles.text}>Next</Text></Button>
			</View>
        )
      };

    prevQuestion = () => {

  		if(this.state.index > 0){
  			let prevAnswer = this.state.routes[this.state.index-1].answer;
  			let prevComment = this.state.routes[this.state.index-1].comment;
  			if(prevAnswer||prevComment){
  				this.props.setNextAnswer(prevAnswer,prevComment);
  			}
  			this.setState((state) => ( {index : state.index - 1}))
  		}
    }
    nextQuestion = () =>{
    	this.state.currentQuestion = this.state.routes[this.state.index].question;
    	// console.log('next question clicked...------>>>>',this.state.index,this.props.question.selectedAns,this.props.question.comment)
    	let data = {
    		currentQuestion : this.state.routes[this.state.index].question,
        	questionId : this.state.routes[this.state.index].key,
    		answer : this.props.question.selectedAns,
        	comment : this.props.question.comment
    	}

    	if(this.state.index < this.state.routes.length-1){
    		let nextAnswer = this.state.routes[this.state.index+1].answer;
    		let nextComment = this.state.routes[this.state.index+1].comment;
	        if(this.props.question.selectedAns || this.props.question.comment){
	          this.props.saveAnswer(data);
	        }
	        this.props.resetSelectedAnswer();
	        if(nextAnswer||nextComment){
	        	console.log('nextAnswer....',nextAnswer)
	        	this.props.setNextAnswer(nextAnswer,nextComment);
	        }
    		this.setState((state) => ( {index : state.index + 1}))

    	}
    }

    renderScene = ({ route }) => {
    	/*this.state.currentQuestion = route.question;*/

    	/*if (Math.abs(this.state.index - this.state.routes.indexOf(route)) > 0) {
    	    return null;
    	}*/
        return (
          <QuestionScreen key = {route.key} questionToChild = {route.question} category = {route.category} answer = {route.answer} comment = {route.comment}/>
          );
    }

    renderScreen () {
        if (this.state.loading) {
          return (
            <View>
              <Text>Loading...</Text>
            </View>
          );
        } else {
          return (
            <TabViewAnimated
              style={styles.container}
              navigationState={this.state}
              renderScene={this.renderScene}
              renderHeader={this._renderHeader}
              onIndexChange={this._handleIndexChange}
              initialLayout={initialLayout}
              swipeEnabled = {false}
              lazy={true}
            />
          );
        }
      }

  render() {
      /*if(this.props.question && this.props.question.length){
        console.log('inside if check...')
        const routes = [];
        this.props.question.forEach((eachQuestion,index) => {
          console.log('pushing to routes......')
          this.state.routes.push({
            title: eachQuestion.question,
            key: index,
            _id : eachQuestion._id
          });
        });
        this.setState({
          routes,
          loading: false,
        });
      }*/
    return (
    <View style={styles.container}>
        {this.renderScreen()}
    </View>
    );
  }

  testClick(){
    console.log('click triggered..')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
  	fontSize:16,
  },
  nextPrvContainer:{
  	display:'flex',
  	justifyContent:'space-between',
  	alignItems:'center',
  	flexWrap: 'wrap',
  	flexDirection:'row',
  },
  paginationDots: {
	height: 16,
	margin: 16,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
  },
  nextBtn:{
  	flexWrap: 'wrap',
  	width:50,
  	height:20,
  	borderRadius:10,
  	backgroundColor: "#fff",
  	borderColor: '#272727',
  	borderWidth: 0.5,
  },
  marginRight: {
  	marginRight :20,
  },
  marginLeft : {
  	marginLeft :20
  },
  blueText:{
  	color:'#00E7E5',
  }
});

function mapStateToProps(state, ownProps) {
  let { question } = state;
  return { question };
}

export default connect(mapStateToProps,questionActions)(HomeScreen);
