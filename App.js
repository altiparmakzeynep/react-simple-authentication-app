import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Banner from './src/components/Banner';
import LoginForm from './src/components/LoginForm';


class App extends Component{
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
