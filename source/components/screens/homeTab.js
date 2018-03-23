import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as  appActions from '../../actions/index';

import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';

import IntroScreen from './introScreen';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

export default class Hometab extends Component {

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

      return (
        <View style={styles.paginationContainer}>
          <View style={styles.paginationDots}>
          		{	props.navigationState.routes.map((_,i)=>(
          				<View
          				key = {i}
          				style={[
			                { backgroundColor: i === props.navigationState.index ? '#151B27' : '#D0D0D2' },
			                styles.dot,
			              ]}
          				/>
          			))
          		}
          </View>
        </View>
      )
    };

  /*_renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third : ThirdRoute,
  });*/

  nextScreen = (index) => {
    const isLastSlide = index === this.state.routes.length;
    console.log('next screen called',this.state.routes.length,isLastSlide);
    if(!isLastSlide){
      this.setState({ index :  index})
    }
    else{
    	this.props.navigator.push({
    	  screen: 'LifeDiary.HomeScreen',
    	  title: '',
    	  navigatorStyle: {
          	tabBarHidden: true
        }
    	});
    }
  }

  renderScene = ({ route }) => {
    switch (route.key) {
    case 'first':
      var data = {
        img : require('../../img/6.jpg'),
        text: `Hey there,\n welcome to Life Diary!`
      }
      return (
        <IntroScreen nextScreen = {this.nextScreen.bind(this)} state = {this.state} dataTochild = {data}/>
        );
    case 'second':
      var data = {
        img : require('../../img/heart.jpg'),
        text: 'We will show you'
      }
      return (
        <IntroScreen nextScreen = {this.nextScreen.bind(this)} state = {this.state} dataTochild = {data}/>
        );
    case 'third' :
    var data = {
        img : require('../../img/6.jpg'),
        text: 'We will we will'
      }
      return (
        <IntroScreen nextScreen = {this.nextScreen.bind(this)} state = {this.state} dataTochild = {data}/>
        );
    default:
      return null;
    }
  }

  render() {

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

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:'relative',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  paginationContainer: {
    left: 0,
    right: 0,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
});

