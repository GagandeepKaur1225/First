import React, { Component,useState} from 'react'
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Feb_17 from '/Users/hidayatrehmat/Desktop/javascript/Project123/Feb_17.js'
import Props from '/Users/hidayatrehmat/Desktop/javascript/Project123/Props.js'
import Textinput from './Textinput'
import Stopwatch from './Stopwatch'
import Form from './Form'

export class App1 extends Component {
  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    )
  }
}
const Var1 = () => {
  return (
    <View>
      <Text>hello people how are youjhmhgsmhsda,jmkjs,hdfkdsjhgk,dhjgkdjhfkdfjhv,dhk,jss</Text></View>);
}
class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    console.log("hey")
    return (
      <View>
        <Text>Hello, world!It is {this.state.date.toLocaleTimeString()}.</Text>
      </View>
    );
  }
}
const App2 = () => {
  function login() {
    Alert.alert("login function");
  }
  return (
    <View>
      <Text>
        function component
      </Text>
      <Button title="login" onPress={login}/>
    </View>
  )
}
const Demo = (props) => {
  console.warn(props.name);
  return (
    <View style={{
      backgroundColor: 'red', padding:5
    }}>
      <Text style={
        {fontSize:50}
      }>{props.name}</Text>
    </View >
  )
}
class App extends Component {
  constructor () {
    super();
    this.state = {
      counter: 0
    };
  }
  incrementCount() {
    prevState = this.state.counter;
    if (prevState < 10) {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }
  decrementCount() {
    prevState1 = this.state.counter;
    if (prevState1>0) {
      this.setState({
        counter: this.state.counter - 1
    
      });
    }
  }
  
  render() {
  
    return (
      <SafeAreaView>
        {/* <Text>Count:</Text>
        <Button title="decrement" onPress={this.decrementCount.bind(this)}></Button>
        <Button title="increment" onPress={this.incrementCount.bind(this)}>INCREMENT</Button> */}
        {/*} <Props />
        <App1 />
        <Var1 />
        <Clock />
        <App2/>
        <Feb_17 />
        <Demo name="kaur" />
    <Textinput/>*/}
        {/* <Stopwatch/> */}
        <Form/>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    justifyContent: 'center',  
    alignItems: 'center',  
    backgroundColor: '#a7a6a9',  
  },  
  welcome: {  
    fontSize: 30,  
    textAlign: 'center',  
    margin: 20,  
  }  
});  

export default App





