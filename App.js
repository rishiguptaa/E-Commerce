import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './app/screens/HomePage';
import AboutScreen from './app/screens/AboutScreen';
import CartScreen from './app/screens/Cart';
import FrocksScreen from './app/screens/Frocks';
// import JumpsuitScreen from './app/screens/Jumpsuits';
// import WhitesScreen from './app/screens/Whites';
// import PartyScreen from './app/screens/Party';
// import CasualsScreen from './app/screens/Casual';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  About: {
    screen: AboutScreen
  },
  Cart : {
    screen : CartScreen
  },
  Frocks : {
    screen : FrocksScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
