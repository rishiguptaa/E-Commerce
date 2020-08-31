import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';

export default class Image extends React.Component {
 render(){
    const header = this.props.header ? 
    <Text style={style.textHeader}>{this.props.header}</Text> : null;
    return (
        
        <TouchableOpacity onPress={()=>{alert("you clicked me")}}>
          <ImageBackground source={this.props.imageSource} style={style.image} resizeMode={'stretch'}></ImageBackground>
        </TouchableOpacity>
        
            // <ImageBackground source={this.props.imageSource} style={style.image} resizeMode={'stretch'}>
            //     {header}
            // </ImageBackground>
        );
    }
}

const style = StyleSheet.create({
    image : {
        width : 'auto',
        height : 250,
        alignItems : 'center',
        justifyContent:'center',
        position: 'relative', // because it's parent
        top: 2,
        left: 2
    },
    textHeader:{
        fontWeight: 'bold',
                fontSize : 15,
                color: 'white',
                position: 'absolute', // child
                bottom:80, // position where you want
                left: 30
    }
});