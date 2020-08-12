import React from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';

const Input = ({text,inputPlaceHolder,onChangeText,value,secureTextEntry}) => {
    return(
        <View style={styles.inputContainer}>
            <Text style={styles.textStyle}>{text}</Text>
            <TextInput style={styles.inputStyle}
                       secureTextEntry = {secureTextEntry}
                       placeholder={inputPlaceHolder}
                       onChangeText={onChangeText}
                       value={value}>
                       
            </TextInput>
        </View>

    )
}

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:"center",
        height:50,
        width:'auto',
        flexDirection:"row",
        borderBottomWidth:1,
        borderColor:"#fff"
  
    },
    textStyle:{
        fontWeight:'900',
        fontSize:15,
        flexGrow:1,
        paddingLeft:50
    },
    inputStyle:{
        fontSize:13,
        flexGrow:3,
        paddingLeft:0,

    }
});
export {Input};