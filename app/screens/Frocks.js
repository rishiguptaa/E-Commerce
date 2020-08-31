// import React from 'react';
// import { StyleSheet, View, Image, Text, Button } from 'react-native';
// import { connect } from 'react-redux';

// export default class Frocks extends React.Component {

//     componentDidMount() {
//          console.log('get cart')
//      } 

//  render(){

//      console.log(this.props)

//     return (
//             <View>
//                 <Text>Frocks</Text>
//             </View>
//         );
//     }
// }

// // const mapStateToProps = state=>{
// //     return {
// //         carData : state.cart
// //     }
// // }
// // export default connect(mapStateToProps)(cart);


// // const style = StyleSheet.create({
    
// // });

import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class Frocks extends Component {
  render() {
    return (
        <View>
            <View style={style.content}>
                <View style={style.column2}>
                    <Images imageSource={require('../images/pic1.jpeg')}>
                    </Images>
                    <Text>Rs 699</Text>
                </View>
                <View style={style.column1}>
                    <Images imageSource={require('../images/pic13.jpeg')}>
                    </Images>
                    <Text>Rs 569</Text>
                    </View>
            </View>
            <View style={style.contentBanner}>
                <Images imageSource={require('../images/background.jpeg')} resizeMode={'cover'}>
                </Images>
                <Text>Rs 499</Text>
            </View>
            <View style={style.content}>
                <View style={style.column1}>
                    <Images imageSource={require('../images/pic9.jpeg')}>
                    </Images>
                    <Text>Rs 759</Text>
                </View>
                <View style={style.column2}>
                    <Images imageSource={require('../images/pic7.jpeg')}>
                    </Images>
                    <Text>Rs 899</Text>
                </View>
            </View>
        </View>
    );
  }
}