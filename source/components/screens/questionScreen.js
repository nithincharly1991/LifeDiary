/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-16 12:20:12
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-22 19:10:05
*/

import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, TouchableWithoutFeedback } from 'react-native';

import {
  Input,
} from '../widgets';

var height = Dimensions.get('window').height;
var width = Dimensions.get('window').width; //full width



export default class QuestionScreen extends React.Component {

	constructor(props){
		super(props);
		// this.commentInputView = this.commentInputView.bind(this);

	}

	state = {commentExpanded:false,actveIndex:-1};

	commentInputView = () => {
		this.setState({commentExpanded:true})
	}

	commentInputShrink = () =>{
		this.setState({commentExpanded:false})
	}

	selectAnswer = (option) =>{
		console.log('select answer called yeah yeah...',option);
		this.setState({actveIndex:option})
	}

	render(){
		/*var nextScreen = this.props.nextScreen;
		var moveTo = this.props.state.index + 1;
		console.log('this.props.data',this.props.dataTochild)
		var source = this.props.dataTochild.img;
		var textTodis = this.props.dataTochild.text;*/
		var options = ['Best','Better','Good','Neutral','Bad','Worse','Worst'];
	  	return (
		    <View style = {styles.pageContainer}>
			    <View style={styles.page}>
			       	<Image style={styles.introImg} source = {require('../../img/6.jpg')}/>
   			        <Text style={styles.questHeading}>
   			          Food
   			        </Text>
   			        <Text style = {styles.questText}>Are you satisfied with the </Text>
   			        <View style = {styles.btnContainer}>
   			        { options.map((option,index)=>(
   			        	this.state.actveIndex == index ?
   			        	<TouchableWithoutFeedback key = {index} onPress = {()=>this.selectAnswer(index)} style={styles.roundBtnWrap}>
   			        		<View style={[styles.roundBtn,styles.activeRoundBtn,styles['activeroundBtn'+option]]}>
   			        			<Text style={styles.btnTextWhite}>{option}</Text>
   			        			<Image source = {require('../../img/White_check.svg')} style={styles.tickIcon}></Image>
   			        		</View>
   			        	</TouchableWithoutFeedback>
   			        	:
   			        	<TouchableWithoutFeedback key = {index} onPress = {()=>this.selectAnswer(index)} style={styles.roundBtnWrap}>
   			        		<View style={[styles.roundBtn,styles['roundBtn'+option]]}>
   			        			<Text style={styles.btnText}>{option}</Text>
   			        		</View>
   			        	</TouchableWithoutFeedback>
   			        ))}
   			        </View>
			    	{
				    this.state.commentExpanded ?
				        <View style = {styles.extraCommentContainer}>
				            <View style={styles.commentContainer}>
				            	<Input style={styles.commentInput}
		        	                placeholder="Enter your comments here.."
		        	                onChange={(text) => this.setState({ username: text })}
		        	                value={this.state.username}
		        	                multiline = {true} />
				            </View>
				            <TouchableOpacity style={[styles.commentBtn,styles.commentBtnExp]} onPress={this.commentInputShrink}>
				                <Image source = {require('../../img/6.jpg')} style={styles.btnIcon}></Image>
				                <Text>Add Comments</Text>
				            </TouchableOpacity>
			            </View>
			             :
					    <View style = {styles.cmmntBtnWrap}>
					    	<TouchableOpacity style={styles.commentBtn} onPress={this.commentInputView}>
					    		<Image source = {require('../../img/6.jpg')} style={styles.btnIcon}></Image>
					    			<Text>Add Comments</Text>
					    	</TouchableOpacity>
					    </View>
					}
				</View>
		    </View>
	  );
	}
}

const styles = StyleSheet.create({

  pageContainer:{
  	display:'flex',
  	alignItems:'center',
    width:width,
    backgroundColor:'red',
    flex:1,
  },
  page: {
  	display:'flex',
  	width:width,
  	flex:1,
    alignItems: 'center',
    backgroundColor:'#fff',
    position:'relative',
    zIndex:10,
  },
  btnIcon:{
  	position:'absolute',
  	height:20,
  	width: 20,
  	left:12,
  	top:5,
  },

  extraCommentContainer:{
  	position:'absolute',
  	height: (height / 2) + 20,
  	paddingTop:20,
  	bottom:0,
  	backgroundColor:'transparent',
  	alignItems: 'center',
  },
  commentContainer:{
  	position:'relative',
  	height: (height / 2),
  	backgroundColor:'#F5F5F5',
  	width:'100%',
  	display:'flex',
    alignItems: 'center',
    /*shadowColor:'#000',
    shadowRadius:2,
    shadowOffset:{
    	width:3,
    	height:5
    },*/
  },
  commentWrap:{


  },
  commentBtn:{
  	position:'relative',
    backgroundColor:'#fff',
    borderColor: '#272727',
    borderWidth: 0.7,
    borderRadius:15,
    padding:5,
    paddingRight:20,
    paddingLeft:40,
  },
  cmmntBtnWrap:{
  	position:'absolute',
  	bottom:20,
  },
  commentBtnExp:{
    position:'absolute',
    top:5,
    zIndex:100,
    backgroundColor:'#F5F5F5',
    borderWidth:0,
    /*shadowColor:'rgba(135, 135, 135, 0.5)',
    shadowRadius:2,
    shadowOffset:{
    	width:3,
    	height:2
    }*/
  },
  commentInput:{
  	borderWidth:0,
  	marginTop:40,
  	height:100,
  },
  introImg:{
  	width:80,
  	height:80,
  	borderRadius:40,
  	marginTop:2,
  },
  questHeading: {
    color: '#00E6E2',
    textAlign: 'center',
    marginTop:7,
    fontSize:30,
    marginBottom:5,
  },
  questText:{
  	textAlign:'center',
  	fontSize:16,
  },
  btnContainer:{
  	display:'flex',
  	flexWrap: 'wrap',
  	flexDirection:'row',
  	alignItems:'center',
  	justifyContent:'center',
  },
  roundBtn:{
  	width:90,
  	height:90,
  	borderRadius:50,
  	borderWidth:6,
  	display:'flex',
  	alignItems:'center',
  	justifyContent:'center',
  	marginLeft:10,
  	marginTop:5,
  	marginBottom:5,
  	marginRight:10,
  },
  roundBtnBest:{
  	borderColor:'#FFF946',
  },
  roundBtnBetter:{
  	borderColor:'#FF9644',
  },
  roundBtnGood:{
  	borderColor:'#FF0017',
  },
  roundBtnNeutral:{
  	borderColor:'#00AA5A',
  },
  roundBtnBad:{
  	borderColor:'#00AEED',
  },
  roundBtnWorse:{
  	borderColor:'#00275C',
  },
  roundBtnWorst:{
  	borderColor:'#040404',
  },

  activeroundBtnBest:{
  	backgroundColor:'#FFF946',
  	borderColor:'#FFF946'
  },
  activeroundBtnBetter:{
  	backgroundColor:'#FF9644',
  	borderColor:'#FF9644'
  },
  activeroundBtnGood:{
  	backgroundColor:'#FF0017',
  	borderColor:'#FF0017'
  },
  activeroundBtnNeutral:{
  	backgroundColor:'#00AA5A',
  	borderColor:'#00AA5A'
  },
  activeroundBtnBad:{
  	backgroundColor:'#00AEED',
  	borderColor:'#00AEED'
  },
  activeroundBtnWorse:{
  	backgroundColor:'#00275C',
  	borderColor:'#00275C'
  },
  activeroundBtnWorst:{
  	backgroundColor:'#040404',
  	borderColor:'#040404'
  },
  roundBtnWrap:{

  },
  btnText:{
  	fontSize:16
  },
  btnTextWhite:{
  	color:'#fff',
  	fontSize:16
  },
  tickIcon:{
  	width:20,
  	height:20,
  	position:'absolute',
  	top:5,
  },
  activeRoundBtn:{
  	position:'relative'
  }
});
