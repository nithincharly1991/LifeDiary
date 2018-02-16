/*
* @Author: Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Date:   2018-02-06 12:44:01
* @Last Modified by:   Nithin Charly @ Irisind AB <nithin.charly@irisind.com>
* @Last Modified time: 2018-02-08 14:49:49
*/

/* eslint-disable import/prefer-default-export */
import { Navigation } from 'react-native-navigation';

import Login from './components/Login/LoginComponent';
import Home from './components/Home/HomeComponent';
// import QRScanner from './components/QRScanner/QRScannerComponent'

export function registerScreens(store, Provider) {
    Navigation.registerComponent('lifediary.login', () => Login, store, Provider);
    Navigation.registerComponent('lifediary.home', () => Home, store, Provider);
    // Navigation.registerComponent('io.avos.qr_scanner', () => QRScanner, store, Provider);
}
