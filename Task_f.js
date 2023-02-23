import React, { Component } from 'react'
import { Text, TextBase, View, TextInput, Button, Image, TouchableOpacity, } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
// import Textinput from './Textinput'
import Button1 from './Button';
class Task_f extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidepass: true,
            isSelect: false,
            email: ' ',
            isSelect1:false,
        }
    }
    onSubmit = () => {
        console.log("details are submitted");
    }
    showpass = () => {
        this.setState({ hidepass: !this.state.hidepass })
    }
    go = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) !== true) {
            this.setState({ emailErr: "Enter Correct Email address" });
        } else {
            this.setState({ emailErr: "" })
        }
    }

 
    render() {
        return (
            <View>
                <Button1 width="#DDDDDD"
                fontSize></Button1>
                <Text>HELLO</Text>
            </View>
        )
    }
}

export default Task_f;
