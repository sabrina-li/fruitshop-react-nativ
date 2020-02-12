/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import fruitList from './data/products.json';
import getProductsImg from './services/getProductsImg'

export default class HelloWorldApp extends Component {
  
  render() {
    // console.log(getProductsImg)
    return (
      <View style={{ flex: 1,  flexDirection: 'column' }}>
        {fruitList.map(fruit=>{
          return <View key={fruit.title} tyle={{width:'100%'}} >
            {/* <Image
              style={{width: 50, height: 50}}
              source={getProductsImg(fruit)}
            /> */}
            <Text>{fruit.title}</Text>
          </View>
        })}
      </View>
    );
  }
}
