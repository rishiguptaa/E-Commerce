import React , {Component} from 'react';
import { View, TextInput, TouchableOpacity, Button, TextInputBase } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

export class RegisterPage extends Component { 
    render() {
        return (
            <View style = {style.container}>
                <View style={style.registerform}>
                    <TextInput style = {style.input}>
                        placeholder = "Enter Your name"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.emailinput.focus()}

                    </TextInput>
                    <TextInput styel = {style.input}>
                        placeholder = "Enter Your email"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordinput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                        ref = {(input) => this.emailinput = input}
                    </TextInput>
                    <TextInput style = {style.input}>
                        placeholder = "Enter passsword"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput = input}
                    </TextInput>
                    <TouchableOpacity style = {style.buttoncontainer} onPress = {()=> this.props.navigation.navigate('Login')} >
                        <Text style = {style.buttontext}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}