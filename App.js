import React, { Component,useState} from 'react'
import { Text, View, Button, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Feb_17 from '/Users/hidayatrehmat/Desktop/javascript/Project123/Feb_17.js'
import Props from '/Users/hidayatrehmat/Desktop/javascript/Project123/Props.js'
import Textinput from './Textinput'
import Stopwatch from './Stopwatch'
import Form from './Form'
import New20FEB,{New20FEB3,New21} from './New20FEB'
import Child from './Child'
import Hook1 from './Hook'
import Form_task from './Form_task'
import Task_f from './Task_f';
import Lifecycle from './Lifecycle';
import SignupPage from './SignupPage';
import NavigationScreen from './NavigationScreen';


const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Form_task/> */}
      {/* <SignupPage/> */}
      <NavigationScreen/>
    </View>
  )
}
export default App






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
{/* <Form/> */}
 {/* <New20FEB3/>
<New21/> */}
{/* <Hook1/> */}