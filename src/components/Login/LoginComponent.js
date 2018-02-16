/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 12:55:13
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-07 12:12:06
*/

import React, { Component } from 'react';
import styles from './style';
import { IfAndroid } from '../../utils/PlatformCheck';
import LoginActions from './LoginActions';
import { connect } from 'react-redux';
import {
  Input,
  Button
} from '../widgets';

import {
  Text,
  Image,
  View,
} from 'react-native';


class LoginComponent extends Component<{}> {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      styles: {
        login: {},
        logo: {}
      }
    }
  }

  componentDidMount() {
    // this.props.checkActiveSession();
  }

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
    // console.log('props', this.props.loginStatus)

    return (
      <View style={styles.container}>
          <View style={styles.login}>
            <Input style={styles.inputFields}
              placeholder="Email id/phone"
              onChange={(text) => this.setState({ username: text })}
              value={this.state.username} />
            <Input style={styles.inputFields}
              placeholder="Password"
              type="password"
              onChange={(text) => this.setState({ password: text })}
              value={this.state.password} />
            <Button onPress={() => { this.props.login(this.state.username, this.state.password) }}>
              <Text style={styles.buttonText}>Login</Text>
            </Button>
          </View>
      </View>
    );
  }
}


// LandingComponent.propTypes = {
// 	actions: PropTypes.object.isRequired,
// 	nowPlayingMovies: PropTypes.object.isRequired,
// 	popularMovies: PropTypes.object.isRequired,
// 	navigator: PropTypes.object
// };

function mapStateToProps(state, ownProps) {
  let { loginStatus, errorState } = state;
  return { loginStatus, errorState };
}


export default connect(mapStateToProps, LoginActions)(LoginComponent);
