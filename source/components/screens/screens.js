import { Navigation } from 'react-native-navigation';
import Login from './login';
import HomeTab from './homeTab';
import SearchTab from './searchTab';


export default (store, Provider) =>  {
	Navigation.registerComponent('LifeDiary.Login', () => Login, store, Provider);
	Navigation.registerComponent('LifeDiary.HomeTab', () => HomeTab, store, Provider);
	Navigation.registerComponent('LifeDiary.SearchTab', () => SearchTab, store, Provider);

}
