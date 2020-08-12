import React, { Component } from 'react';
import {StyleSheet,Text,View, Button} from 'react-native';
import {Input} from './common';

class LoginForm extends Component{
    state={
        email:'',
        password:''
    }
    render(){
        return(
            <View style={styles.container}>
                <View>
                   <Input text='Email' inputPlaceHolder='Enter Email'
                          onChangeText={(text)=>{
                             this.setState({
                                 email:text
                             })
                           }}
                          value={this.state.email}>
                    </Input>
                </View>
                <View>
                <Input text='Password' inputPlaceHolder='Enter Password'
                        onChangeText={(text)=>{
                            this.setState({
                                password:text
                            })
                          }}
                          secureTextEntry
                          value={this.state.password}>
                </Input>
                </View>
                <View style={styles.btnLogin}>
                    <Button color="#22BA69" title='Login'></Button>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    btnLogin:{
        marginTop:20,
        borderWidth:1,
        borderColor:"#fff",
        borderRadius:24,
        justifyContent:"center"
    }

});

export default LoginForm;