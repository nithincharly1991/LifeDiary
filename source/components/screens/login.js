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
import LoginActions from '../../actions/loginActions';

class Login extends Component {

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
						onChangeText={(text) => this.setState({ username: text })}
						value={this.state.username} />
					<Input style={styles.inputFields}
						placeholder="Password"
						type="password"
						onChangeText={(text) => this.setState({ password: text })}
						value={this.state.password} />
					<Button onPress={ () => this.props.login(this.state.username,this.state.password) }>
						<Text style={styles.buttonText}>Login</Text>
					</Button>
					<Button onPress={ () => this.props.newUser() } style={styles.newUserBtn}>
						<Text style={styles.buttonText}>New user? Sign up</Text>
					</Button>
				</View>
			</View>
		);
	}
}

function mapStateToProps(state, ownProps) {
	let { loginStatus} = state;
	return { loginStatus };
}

export default connect(mapStateToProps,LoginActions)(Login);
