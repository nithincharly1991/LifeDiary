/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-27 12:53:17
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-03-06 13:07:16
*/
import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';
import {
  Input,
  Button
} from '../widgets';
import styles from './style';
import {Navigation} from 'react-native-navigation';
import {connect} from 'react-redux';
// import * as  appActions from '../../actions/index';
import signupActions from '../../actions/signupActions';

class Signup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email 	: '',
      phNo 		:'',
      password 	: '',
      confirmPassword: '',
      age : '',
      gender : '',
      weight : '',
      height : '',
      waist : '',
      styles 	: {
        login: {},
        logo: {}
      }
    }
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
  	let { loginStatus } = this.props;
    return (
        <View style={styles.container}>
            <View style={styles.login}>
              <Input style={styles.inputFields}
                placeholder="Email id"
                onChangeText={(text) => this.setState({ email: text })}
                value = {this.state.email} />
              <Input style={styles.inputFields}
                placeholder="Phone number"
                onChangeText={(text) => this.setState({ phNo: text })}
                value = {this.state.phNo} />
              <Input style={styles.inputFields}
                placeholder="Set Password"
                type="password"
                onChangeText={(text) => this.setState({ password: text })}
                value = {this.state.password}
                 />
              <Input style={styles.inputFields}
	              placeholder="Confirm Password"
	             type="password"
	             onChangeText={(text) => this.setState({ confirmPassword: text })}
	             value ={this.state.confirmPassword}
	              />
              <Input style={styles.inputFields}
	             placeholder="Age"
	             onChangeText={(text) => this.setState({ age: text })}
	             value ={this.state.age}
	              />
              <Input style={styles.inputFields}
	             placeholder="Gender"
	             onChangeText={(text) => this.setState({ gender: text })}
	             value ={this.state.gender}
	              />
              <Input style={styles.inputFields}
	             placeholder="Weight"
	             onChangeText={(text) => this.setState({ weight: text })}
	             value ={this.state.weight}
	              />
              <Input style={styles.inputFields}
	             placeholder="Height"
	             onChangeText={(text) => this.setState({ height: text })}
	             value ={this.state.height}
	              />
              <Input style={styles.inputFields}
	             placeholder="Waist"
	             onChangeText={(text) => this.setState({ waist: text })}
	             value ={this.state.waist}
	              />
              <Button onPress={ () => this.props.onSingUpPress(this.state) }>
                <Text style={styles.buttonText}>Sign up</Text>
              </Button>
              <Button onPress={ () => this.props.onBackBtnPress() }>
                <Text style={styles.buttonText}>Back</Text>
              </Button>
              {loginStatus.confirmErr ? <View><Text>some errr</Text></View>:<View><Text>No err</Text></View>}
            </View>
        </View>
    );
  }

  /*
  onLoginPress:
    Changes the root value of the app to be 'after-login', changing it to tab view
  */
  /*onSingUpPress() {

    this.props.dispatch(appActions.signUp());

  }*/
}

function mapStateToProps(state, ownProps) {
  let { loginStatus} = state;
  return { loginStatus };
}

export default connect(mapStateToProps,signupActions)(Signup);
