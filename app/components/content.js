import React, {Component} from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Images from './images';
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator } from 'react-navigation-stack';

export default class Content extends Component {
 render(){
    return (
        <View>
            <View style={style.content}>
                <View style={style.column2}>
                    <Images imageSource={require('../images/pic1.jpeg')}>
                        header = 'Frocks'
                    </Images>
                </View>
                <View style={style.column1}>
                    <Images imageSource={require('../images/pic13.jpeg')}>
                        header = 'Jumpsuits'
                    </Images>
                    </View>
            </View>
            <View style={style.contentBanner}>
                <Images imageSource={require('../images/background.jpeg')} resizeMode={'cover'}>
                        header = 'Whites'
                </Images>
            </View>
            <View style={style.content}>
                <View style={style.column1}>
                    <Images imageSource={require('../images/pic9.jpeg')}>
                        header = 'Party'
                    </Images>
                </View>
                <View style={style.column2}>
                    <Images imageSource={require('../images/pic7.jpeg')}>
                        header = 'Casual'
                    </Images>
                </View>
            </View>
        </View>
        );
    }
}

const style = StyleSheet.create({
    content :{
        flex : 1,
        flexDirection : 'row',
        flexWrap : 'wrap',
        padding : 5,
    },
    column1:{
        flex : 1,
        padding : 5,
        
    },
    column2:{
        flex : 2,
        padding : 5,
    },
    contentBanner:{
        // width : 'auto',
        // height : 250,
        // alignItems : 'center',
        // justifyContent : 'center',
        // padding : 5,

        // width: 'auto',
        // height: 200,
        // alignItems : 'center',
        // justifyContent:'center'
        marginLeft : 10,
        marginRight : 10
    }
});