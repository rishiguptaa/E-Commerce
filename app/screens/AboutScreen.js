import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
        Introduction
Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal. The brand is making a conscious effort to bring the power of fashion to shoppers with an array of the latest and trendiest products available in the country.

Value proposition
Myntra's value proposition revolves around giving consumers the power and ease of purchasing fashion and lifestyle products online. Offerings such as the largest in-season product catalogue, 100% authentic products, cash on delivery and 30 day return policy make Myntra, the preferred shopping destination in the country. To make online shopping easier for you, a dedicated customer connect team is on standby to answer your queries 24x7.

Brands
Myntra understands its shoppers' needs and caters to them with choice of apparel, accessories, cosmetics and footwear from over 500 leading Indian and international brands. Prominent brands include Adidas, Nike, Puma, Catwalk, Inc 5, United Colors of Benetton, FCUK, Timberland, Avirate, FabIndia and Biba to name a few. You can also shop from some recently introduced labels such as - Roadster, Sher Singh, Dressberry, Kook N Keech and ETC.

        </Text>
      </View>
    )
  }
}