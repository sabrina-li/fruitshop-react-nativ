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
import FullStory from '@fullstory/react-native'

export default class ReactNativeShoppe extends Component {
  render() {
    FullStory.getCurrentSessionURL().then(function(result) {
      console.log("**** FullStory.getCurrentSessionURL()=" + result);
    });

    return (
    // <View>
    //   <Text>test</Text>
    //   <Text style={{color: '#eee'}} fsClass="fs-exclude,fs-exclude">Text element that is excluded</Text>
    //   <Text style={{color: '#eee'}} fsClass="fs-mask">Text element that is masked</Text>
    //   <Text style={{color: '#eee'}} fsClass="fs-unmask">Text element that is unmasked</Text>
    // </View>
      <NavigationContainer>
        <BottomTabs />
        {/* <MarketScreen /> */}
      </NavigationContainer>
    );
  }
}
