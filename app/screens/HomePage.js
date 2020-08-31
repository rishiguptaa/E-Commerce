import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';
import Header from '../components/header';
import Banner from '../components/banner';
import Content from '../components/content';

export default class Home extends Component {
  render() {
    return (
      <View>
        <Header />
        <Banner />
        <Content />
          <Button
          title="Go to Cart"
          onPress={() => this.props.navigation.navigate('Cart')}
          />
          <Button
          title="Go to About"
          onPress={() => this.props.navigation.navigate('About')}
          />
      </View>
    )
  }
}
