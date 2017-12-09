import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import store from './store/store'

import Stack from './config/router'

const instructions = Platform.select({
  ios: 'We have detected that you are using ios,\n' +
    'Doshi ios',
  android: 'We have detected that you are using android,\n' +
    'Doshi Android',
});

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stack/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
