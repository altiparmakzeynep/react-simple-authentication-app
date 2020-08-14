import React, { Component } from 'react';
import {StyleSheet,Text,View, Button} from 'react-native';
import {Input,Spinner} from './common';
import firebase from 'firebase';


class LoginForm extends Component{
    state={
        email:'',
        password:'',
        error:'',
        loading:false
    }
    onButtonClicked= () =>{
        const {email,password} =  this.state;
        this.setState({
            error:'',
            loading:true
        })
        firebase.auth().signInWithEmailAndPassword(email,password)
        .catch((err)=>{
              firebase.auth().createUserWithEmailAndPassword(email,password)
                .catch((error)=>{
                    this.setState({
                        error:'FAILED',
                        loading:false
                    })
                });
        });
    }
    render(){
        const {error,loading} = this.state;

        const errorMessage = error ? (
        <Text style={styles.errorMsg}> {error}</Text>
        ): null;

        const loginBtn = loading ? (
            <Spinner/>
        ):    
        (<Button color="#22BA69" title='Login'
               onPress={this.onButtonClicked}>
        </Button>)
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
                {errorMessage}
                <View style={styles.btnLogin}>
                    {loginBtn}
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
    },
    errorMsg:{
        color:'red',
        fontSize:20,
        paddingTop:10,
        alignSelf:'center'
    }

});

export default LoginForm;