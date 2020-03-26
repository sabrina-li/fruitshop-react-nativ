import React, { Component } from 'react';
import { ScrollView, Text, View, Image, Button } from 'react-native';
import fruitList from './data/products.json';

export default BottomTabs = (props) => {
  let list = props.fruitList ? props.fruitList : fruitList;
console.log(props)
  return (
    <ScrollView style={{ width: "100%", flex: 1, flexDirection: 'row', flexWrap: "wrap" }}>
      {list.map(fruit => {
        console.log(fruit)
        const imgURL = "https://fruitshoppe.firebaseapp.com/images/" + fruit.image;
        return <View key={fruit.title} tyle={{ width: '100%' }} >
          <Image
            style={{ width: 150, height: 150 }}
            source={{ uri: imgURL }}
          />
          <Text style={{ fontSize: 30 }}>
            {fruit.title}
          </Text>
          <Button onPress={() => {
            alert('You tapped the button!' + fruit.title);
          }}
            title="add to cart"></Button>
        </View>
      })}
    </ScrollView>
  );
}