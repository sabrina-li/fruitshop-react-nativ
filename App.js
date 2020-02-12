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

export default class ReactNativeShoppe extends Component {
  render() {
    return (
      <View style={{ width:"100%", flex: 1, flexDirection: 'row', flexWrap:"wrap"}}>
        {fruitList.map(fruit=>{
          const imgURL = "https://fruitshoppe.firebaseapp.com/images/"+fruit.image;
          return <View key={fruit.title} tyle={{width:'100%'}} >
            <Image
              style={{width: 150, height: 150}}
              source={{uri: imgURL}}
            />
            <Text style={{fontSize: 30}}>
              {fruit.title}
            </Text>
          </View>
        })}
      </View>
    );
  }
}
