import React, { Component } from 'react';
import {View,StyleSheet,Text} from 'react-native';

class Banner extends Component{
    render(){
        return(
            <View style={styles.bannerContainer}>
                <Text style={styles.bannerText}>{this.props.text}</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    bannerContainer:{
        width:'auto',
        height:320,
        backgroundColor:"#22BA69",
        alignItems:"center",
        justifyContent:"center"

    },
    bannerText:{
        fontSize:45,
        color:"#FFF"

    }

});
export default Banner;