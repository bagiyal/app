/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import Navigator from './src/Navigator';
import StackNavigator from './src/StackNavigator';

function App(): JSX.Element {
  return (
    <Navigator />
    // <StackNavigator />
  );
}

const styles = StyleSheet.create({
});

export default App;
