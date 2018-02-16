/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-08 16:49:23
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-08 16:53:20
*/

import React, { Component } from 'react';
import styles from '../Login/style';
import { IfAndroid } from '../../utils/PlatformCheck';
import HomeActions from '../Login/LoginActions';
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


class HomeComponent extends Component<{}> {

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
              placeholder="Emaillll"
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


export default connect(mapStateToProps, HomeActions)(HomeComponent);
