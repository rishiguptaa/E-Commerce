import React from 'react';
import { StyleSheet, ImageBackground, Text } from 'react-native';
import ImageText from './imagetext';
export default class Banner extends React.Component {
 render(){
    return (
        <ImageBackground source={require('../images/bg2.jpeg')} style={style.banner} resizeMode={'cover'} >

        <Text
            style={style.text} >
                𝔬𝔫𝔢 𝔰𝔱𝔬𝔭 𝔡𝔢𝔰𝔱𝔦𝔫𝔞𝔱𝔦𝔬𝔫 𝔣𝔬𝔯 𝔣𝔞𝔰𝔥𝔦𝔬𝔫 𝔠𝔩𝔬𝔱𝔥𝔢𝔰
        </Text>

        </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    banner:{
        width: 'auto',
        height: 100,
        alignItems : 'center',
        justifyContent:'center',
        marginLeft : 10,
        marginRight : 10,
        position: 'relative', // because it's parent
        top: 2,
        left: 2
    },
    text :{
        fontWeight: 'bold',
            fontSize : 15,
            color: 'white',
            position: 'absolute', // child
            bottom:40, // position where you want
            left: 30
    }
});