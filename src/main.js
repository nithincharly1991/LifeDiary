/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 12:42:07
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-09 11:53:44
*/

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';
import configureStore from './storeConfig';

import * as appActions from "./constants/appActions";

import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View
} from 'react-native';


const store = configureStore();
registerScreens(store, Provider);

const navigatorStyle = {
	statusBarColor: '#25303c',
	statusBarTextColorScheme: 'light',
	navigationBarColor: 'black',
	navBarBackgroundColor: '#293849',
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	tabBarButtonColor: 'red',
	tabBarSelectedButtonColor: 'red',
	tabBarBackgroundColor: 'white',
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

/*Navigation.startSingleScreenApp({
	screen: {
		screen: 'lifediary.login',
		title: 'LifeDiary',
		navigatorStyle,
	}
});*/

export default class  App extends Component {
	constructor(props) {
		super(props);
		store.subscribe(this.onStoreUpdate.bind(this));
		store.dispatch(appActions.appInitialized());
	}

	onStoreUpdate() {
		let {root} = store.getState().app;
		// handle a root change
		if (this.currentRoot != root) {
			this.currentRoot = root;
			this.startApp(root);
		}
	}

    startApp(root) {
        switch (root) {
        	case 'login':
          Navigation.startSingleScreenApp({

                  screen: {
                    screen: 'lifediary.Login',
                    title: 'Welcome',
                    navigatorStyle: {},
                    navigatorButtons: {}
                    },
                });
                 return;

            case 'after-login':
             Navigation.startTabBasedApp({
                tabs: [
                {
                    label: 'Home',
                    screen: 'lifediary.HomeTab',
                    icon: require('./img/checkmark.png'),
                    selectedIcon: require('./img/checkmark.png'),
                    title: 'Hey',
                    overrideBackPress: false, //this can be turned to true for android
                    navigatorStyle: {}
                },

                ],
             });
             return;
            default: //no root found
          }
    }
}
