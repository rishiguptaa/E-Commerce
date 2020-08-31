import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

export default class ImagesText extends React.Component {
 render(){

    const header = this.props.header ? 
    <Text style={style.textHeader}>{this.props.header}</Text> : null;

    const para = this.props.para ?
    <Text style={style.textPara}>{this.props.para}</Text> : null;

    return (
        <View>
            {header}
            {para}
        </View>
        );
    }
}

const style = StyleSheet.create({
    textHeader : {
        shadowColor : '#000',
        shadowOffset : {width : 0, height:2},
        shadowOpacity : 0.4,
        shadowRadius : 3,
        elevation : 1,
        alignSelf : 'center',
        fontSize : 28,
        fontStyle : 'cursive',
        color : '#292929',
        textAlign : 'center',
        padding : 10,
        backgroundColor : 'rgba(255,255,255,0.4)',
        fontFamily : 'Snell Roundhand',

    },
    textPara:{
        shadowColor : '#000',
        shadowOffset : {width : 0, height:2},
        shadowOpacity : 0.4,
        shadowRadius : 3,
        elevation : 1,
        alignSelf : 'center',
        fontStyle : 'cursive',
        color : '#292929',
        textAlign : 'center',
        padding : 8,
        marginTop : 8,
        fontFamily : 'Snell Roundhand',
        
    }
});