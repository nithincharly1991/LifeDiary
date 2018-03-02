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
import * as  appActions from '../../actions/index';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import QuestionScreen from './questionScreen';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Searchtab extends Component {

  	state = {
      index: 0,
      routes: [
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key:'third',title: 'Third'},
      ],
    };

    constructor(props) {
      super(props)
      this.nextScreen = this.nextScreen.bind(this)
    }

  	_handleIndexChange = index => this.setState({ index });

    _renderHeader = props => {
        /*const isLastSlide = this.state.activeIndex === (this.props.slides.length - 1);
        const isFirstSlide = this.state.activeIndex === 0;

        const skipBtn = (!isFirstSlide && this._renderPrevButton()) || (!isLastSlide && this._renderSkipButton());
        // const skipBtn = this._renderPrevButton();
        const btn = isLastSlide ? this._renderDoneButton() : this._renderNextButton();*/
        console.log('tab props',props)
        return (
			<View style={styles.nextPrvContainer}>
				<Button style = {[styles.nextBtn,styles.marginLeft]} onPress={()=>this.prevQuestion(2)}><Text stlye = {styles.text}>Back</Text></Button>
				<View style={styles.paginationDots}>
					<Text style={[styles.blueText,styles.text]}>1 </Text><Text stlye = {styles.text}>/ 9</Text>
				</View>
				<Button style = {[styles.nextBtn,styles.marginRight]} onPress={() => this.nextQuestion(1)}><Text stlye = {styles.text}>Next</Text></Button>
			</View>
        )
      };

      nextScreen = (index) => {
        const isLastSlide = index === this.state.routes.length;
        console.log('next screen called',this.state.routes.length,isLastSlide);
        if(!isLastSlide){
          this.setState({ index :  index})
        }
        else{
          this.props.navigator.push({
            screen: 'LifeDiary.SearchTab',
            title: '',
            navigatorStyle: {
                tabBarHidden: true
            }
          });
        }
      }

    prevQuestion = (index)=>{
      console.log('previous question clicked...')
    }
    nextQuestion = (index) =>{
      console.log('next question clicked....',index)
    }

    renderScene = ({ route }) => {
      switch (route.key) {
      case 'first':
        var data = {
          img : require('../../img/6.jpg'),
          text: `Hey there,\n welcome to Life Diary!`
        }
        return (
          <QuestionScreen nextScreen = {this.nextScreen.bind(this)} state = {this.state} dataTochild = {data}/>
          );
      case 'second':
        var data = {
          img : require('../../img/heart.jpg'),
          text: 'We will show you'
        }
        return (
          <QuestionScreen nextScreen = {this.nextScreen.bind(this)} state = {this.state} dataTochild = {data}/>
          );
      case 'third' :
      var data = {
          img : require('../../img/6.jpg'),
          text: 'We will we will'
        }
        return (
          <QuestionScreen nextScreen = {this.nextScreen.bind(this)} state = {this.state} dataTochild = {data}/>
          );
      default:
        return null;
      }
    }

  render() {
    console.log('search tab called pooy....')
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
        initialLayout={initialLayout}
        swipeEnabled = {false}
       />
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
