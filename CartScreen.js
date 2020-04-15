import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Button } from 'react-native';
import fruitList from './data/products.json';
import MarketScreen from './MarketScreen';
import FullStory from '@fullstory/react-native';

export default function CartScreen() {
  const printURL = ()=>{
    FullStory.getCurrentSessionURL().then(result => {
      console.log(result);
    });
  }
    return (
    <View style={{flex:1}}>
      <Button title="Checkout" onPress={printURL}></Button>
      <Text fsClass="fs-exclude">Text element that is excluded</Text>
      <Text fsClass="fs-mask">Text element that is masked</Text>
      <Text fsClass="fs-unmask">Text element that is unmasked</Text>
      <MarketScreen fruitList={fruitList.slice(fruitList.length-1)}/>
    </View>
      );
    }