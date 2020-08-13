import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import firebase from 'firebase';
import Banner from './src/components/Banner';
import LoginForm from './src/components/LoginForm';


class App extends Component{
  componentDidMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyCp13ayechWPFPVGFNWJHRIPKAMIQSDbYU",
      authDomain: "react-simple-authenticationapp.firebaseapp.com",
      databaseURL: "https://react-simple-authenticationapp.firebaseio.com",
      projectId: "react-simple-authenticationapp",
      storageBucket: "react-simple-authenticationapp.appspot.com",
      messagingSenderId: "477252144888",
      appId: "1:477252144888:web:6c7cbd5a52ff700bc7f50d",
      measurementId: "G-7HEH2KC44Y"
    });
  }
  render(){
    return(
      <View style={styles.appContainer}>
        <Banner text="Authentication"></Banner>
        <LoginForm></LoginForm>
      </View>

    )
  }

}
const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    backgroundColor:"#CCFFB8"
  }
});

export default App;
