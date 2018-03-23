import { Navigation } from 'react-native-navigation';
import Login from './login';
import SignUp from './signup';
import HomeTab from './homeTab';
import HomeScreen from './homeScreen';


export default (store, Provider) =>  {
	Navigation.registerComponent('LifeDiary.Login', () => Login, store, Provider);
	Navigation.registerComponent('LifeDiary.SignUp', () => SignUp, store, Provider);
	Navigation.registerComponent('LifeDiary.HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('LifeDiary.HomeScreen', () => HomeScreen, store, Provider);
}
