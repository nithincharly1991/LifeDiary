import React, { Component } from 'react';
import {
 Platform,
 AppRegistry
} from 'react-native';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import { Navigation } from 'react-native-navigation';
import registerScreens from './components/screens/screens.js';
import * as reducers from "./reducers/index";
import * as appActions from "./actions/index";
import thunk from "redux-thunk";

import SQLite from 'react-native-sqlite-storage';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);
registerScreens(store, Provider);
let db;

export default class  App extends Component {

  constructor(props) {
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    this.initDb();
    store.dispatch(appActions.appInitialized());
  }

  onStoreUpdate() {
      let {root} = store.getState().root;

      // handle a root change
      // if your app doesn't change roots in runtime, you can remove onStoreUpdate() altogether
      if (this.currentRoot != root) {
        this.currentRoot = root;
        this.startApp(root);
      }
  }

  errorCB(err) {
    console.log("SQL Error: " + err);
  }

  openCB() {
    console.log("Database OPENED");
  }

  successCB() {
    console.log("query executed successfully..")
  }

  closeCB() {
    console.log("Database closed...")
  }

  closeDatabase(){
    db.close(this.closeCB,this.errorCB);
    // console.log(close database called...)
  }

  tablecheckSuccess(msg){
    console.log('table check success called',msg)
    // this.closeDatabase();
  }

  tablecheckFail(err){
    console.log('table check failed...',err)
    db.transaction((tx)=>{
      tx.executeSql('CREATE TABLE IF NOT EXISTS questionLog( '
          + '_id INTEGER PRIMARY KEY NOT NULL, '
          + 'questionId VARCHAR(30), '
          + 'answer VARCHAR(30), '
          + 'comment VARCHAR(30),'
          + 'date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ); ', [], this.successCB, this.errorCB);

      tx.executeSql('CREATE TABLE IF NOT EXISTS completedDays( '
        + '_id INTEGER PRIMARY KEY NOT NULL, '
        + 'date TIMESTAMP );',[],this.successCB, this.errorCB);
    });
    // db.close(this.closeCB,this.errorCB);
    // this.closeDatabase();
  }

  initDb(){
    db = SQLite.openDatabase({name:"lifediary.db"}, this.openCB, this.errorCB);
    /*db.executeSql('DROP TABLE IF EXISTS questionLog;');
    db.executeSql('DROP TABLE IF EXISTS completedDays;');*/
    db.executeSql('SELECT 1 FROM questionLog LIMIT 1;', [], this.tablecheckSuccess.bind(this), this.tablecheckFail)
  }

  startApp(root) {
    switch (root) {
        case 'login':
          Navigation.startSingleScreenApp({
                    screen: {
                    screen: 'LifeDiary.Login',
                    navigatorStyle: {},
                    navigatorButtons: {}
                    },
                });
                return;

        case 'signup':
          Navigation.startSingleScreenApp({
                    screen: {
                    screen: 'LifeDiary.SignUp',
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
                    screen: 'LifeDiary.HomeTab',
                    icon: require('./img/checkmark.png'),
                    selectedIcon: require('./img/checkmark.png'),
                    overrideBackPress: false,
                    navigatorStyle: {
                      navBarHidden: true,
                      tabBarHidden: true
                    }
                },
                ],
            });
            return;

          default:
            console.log("Not Root Found");
        }
    }
}
