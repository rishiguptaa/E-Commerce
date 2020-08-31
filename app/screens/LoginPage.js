const { Component } = require("react")
import React , {Component} from 'react';
import {StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import RegisterPage from '../components/RegisterPage';
import HomePage from './HomePage';

export class LoginPage extends Component {
    render() {
        return (
            <View style = {style.container}>
                <View style={style.textfields}>
                    <TextInput style = {style.input}>
                        placeholder = "username"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCaptalize = "none"
                        autoCorrect = {false}
                    </TextInput>
                    <TextInput style = {style.input}>
                        placeholder = "passsword"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                    </TextInput>
                    <TouchableOpacity style = {style.buttoncontainer} onPress = {() => this.props.navigation.navigate('HomePage')}>
                        <Text style = {style.buttontext}>Login</Text>
                    </TouchableOpacity>
                    <Button
                        title = "Register Now"
                        color = "#1abc9c"
                        onPress = {() => this.props.navigation.navigate('Register')}
                    />
                </View>
            </View>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator ({
    Login : LoginPage,
    Register : RegisterPage,
    Home : HomePage
});

const style = StyleSheet.create({
    container : {
        padding : 20,
        flex : 1,
        backgroundColor : '#ecf0f1',
        justifyContent : 'center',
        alignItems : 'stretch'
    },
    input : {
        paddingLeft : 20,
        borderRadius : 50,
        height : 50,
        fontSize : 25,
        backgroundColor : 'white',
        borderColor : '#1abc9c',
        borderWidth : 1,
        marginbottom :20,
        color: '#34495e',
    },
    buttoncontainer : {
        height : 50,
        borderRadius : 50,
        backgroundColor : '#1abc9c',
        paddingVertical : 10,
        justifyContent : 'center'
    },
    buttontext : {
        textAlign : 'center',
        color : '#ecf0f1',
        fintSize : 20,
    }
})