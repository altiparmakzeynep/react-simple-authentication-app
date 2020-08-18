import React, { Component } from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import firebase from 'firebase';
import Banner from './src/components/Banner';
import LoginForm from './src/components/LoginForm';
import {Spinner} from './src/components/common';


class App extends Component{
  state = {
    loggedIn:null
  }
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

    firebase.auth().onAuthStateChanged((user)=> {
      const loggedIn = user ? true : false;

      this.setState({
        loggedIn
      })
    })
  }
  renderContent(){
    const{loggedIn} = this.state;

    switch(loggedIn){
      case true:
        return(
          <Button onPress={()=> firebase.auth().signOut()}
                  title="Logout"
                  color="red"/>
        )
        case false:
          return(
            <LoginForm></LoginForm>
          )
          default:
            return(
              <Spinner></Spinner>
            )
    }
   }
  render(){
    return(
      <View style={styles.appContainer}>
        <Banner text="Authentication"></Banner>
        {this.renderContent()}
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
