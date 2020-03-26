/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView, Text, View, Image, Button } from 'react-native';
import BottomTabs from './BottomTabs.js'
import MarketScreen from './MarketScreen';

export default class ReactNativeShoppe extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabs />
        {/* <MarketScreen /> */}
      </NavigationContainer>
    );
  }
}
