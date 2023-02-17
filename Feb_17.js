import React, { Component } from 'react';  
import {  
  Platform,  
  StyleSheet,  
  Image,  
  Text,  
  View  
} from 'react-native';  
  
  
export default class Feb_17    extends Component<{}> {
  render() {  
    let imagePath = { uri: 'https://facebook.github.io/react-native/img/header_logo.png'};  
    return (  
        <View style={styles.container}>  
          <Text style={styles.welcome}>Welcome to React Native!</Text>  
          <Image source={imagePath} style={{width: 100, height: 100,backgroundColor:'black'}} />  
        </View>  
    );  
  }  
}  
  
const styles = StyleSheet.create({  
  container: {  
    flex: 5,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: 'red',  
  },  
  welcome: {  
    fontSize: 30,  
    textAlign: 'center',  
    margin: 20,  
  }  
});
