import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Banner extends React.Component {
 render(){
    return (
        <View style={style.header}>
            <Image source={require('../images/logo.png')} style={style.pic} />
            <Text style={style.logo}>Shop Zone</Text>
        </View>
      );
 }
}

const style = StyleSheet.create({
  header : {
    height:80,
    marginTop:10,
    backgroundColor: '#fff',
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent:'center',
    padding:20,
    borderBottomWidth: 4,
    borderBottomColor: '#ddd',
    marginLeft: 10,
    marginRight:10
  },
  pic:{
      width:60,
      height:60,
      borderRadius:20,
  },
  logo:{
      fontSize:20,
      fontStyle:'italic',
      color:'#292929'
  }
});
