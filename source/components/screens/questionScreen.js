/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-16 12:20:12
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-16 12:44:53
*/

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class QuestionScreen extends React.Component {

	render(){
		/*var nextScreen = this.props.nextScreen;
		var moveTo = this.props.state.index + 1;
		console.log('this.props.data',this.props.dataTochild)
		var source = this.props.dataTochild.img;
		var textTodis = this.props.dataTochild.text;*/
	  return (
		    <View style = {styles.pageContainer}>
			    <View style={styles.page}>

			        <Text style={styles.text}>
			          question no :1
			        </Text>
			    </View>

		    </View>
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
