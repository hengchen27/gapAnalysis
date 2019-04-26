/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
console.disableYellowBox = true;
import React, { Component } from 'react';
import { Provider } from 'mobx-react'; //provide a store
import AppNavigator from './app/app.navigator';
import stores from './app/stores';
import {
  StyleProvider
} from 'native-base'; //for styling
import getTheme from './native-base-theme/components';
import custom from './native-base-theme/variables/custom';

//styleProvider to provide theme
export default class App extends Component<{}> {
  render() {
    return (
      <Provider stores={stores}>
        <StyleProvider style={getTheme(custom)}> 
          <AppNavigator/>
        </StyleProvider>
      </Provider>
    );
  }
}

