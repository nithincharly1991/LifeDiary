/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-15 12:28:20
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-03-22 16:25:02
*/

import * as React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';

export default class IntroScreen extends React.Component {

	render(){
		var nextScreen = this.props.nextScreen;
		var moveTo = this.props.state.index + 1;
		var source = this.props.dataTochild.img;
		var textTodis = this.props.dataTochild.text;
	  return (
	  	<TouchableWithoutFeedback style = {styles.Touchablecontainer} onPress = {()=> nextScreen(moveTo)}>
		    <View style = {styles.pageContainer}>
			    <View style={styles.page}>
			    	<Image style={styles.introImg} source = {source}/>
			        <Text style={styles.text}>
			          {textTodis}
			        </Text>
			    </View>
			    <View style = {styles.touchAnyWhere}>
			    	<Text style = {styles.touchAnyWhereText}>
			    		Tap anywhere to continue
			    	</Text>
			    </View>
		    </View>
	    </TouchableWithoutFeedback>
	  );
	}
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageContainer:{
  	flex:1,
  },
  container: {
  },
  introImg:{
  	width:100,
  	height:100,
  	borderRadius:50,
  },
  text: {
    color: '#535353',
    textAlign: 'center',
    marginVertical: 30,
    marginHorizontal: 16,
    fontSize:25,
  },
  Touchablecontainer:{
  	flex: 1,
  	position:'relative',
  },
  touchAnyWhere : {
  	position:'absolute',
  	bottom:30,
  	right:0,
  	left:0,
  },
  touchAnyWhereText:{
  	color:'#B1B1B1',
  	textAlign:'center',
  	fontSize:18,
  }

});
