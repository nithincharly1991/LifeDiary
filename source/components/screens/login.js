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
import * as  appActions from '../../actions/index';

export class Login extends Component {

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

  static navigatorStyle = {
    navBarHidden: true
  };

  render() {
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
              <Button onPress={ () => this.onLoginPress() }>
                <Text style={styles.buttonText}>Login</Text>
              </Button>
            </View>
        </View>
    );
  }

  /*
  onLoginPress:
    Changes the root value of the app to be 'after-login', changing it to tab view
  */
  onLoginPress() {

    this.props.dispatch(appActions.login());

  }
}


export default connect()(Login);
