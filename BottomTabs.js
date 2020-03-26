import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MarketScreen from './MarketScreen';
import CartScreen from './CartScreen';

export default BottomTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Market" component={MarketScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    );
  }