/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../LearnReact/style/StyleView'

export default class App extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Welcome to React Native!</Text>
      </View>
    );
  }
}
