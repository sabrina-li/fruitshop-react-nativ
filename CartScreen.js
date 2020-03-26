import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Button } from 'react-native';
import fruitList from './data/products.json';
import MarketScreen from './MarketScreen';

export default function CartScreen() {
    return (
    <View style={{flex:1}}>
      <Button title="Checkout"></Button>
      <MarketScreen fruitList={fruitList.slice(fruitList.length-1)}/>
    </View>
      );
    }