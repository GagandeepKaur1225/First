import React, { Component } from 'react'
import { Text, View, StyleSheet, DatePickerIOSComponent, SafeAreaView, TextInput, Button } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';


// import Textinput from './Textinput'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            dob: '',
            contact: '',
            showCalorie:false,
        };
        this.onDateChange = this.onDateChange.bind(this);
        this.showCal = this.showCal.bind(this);

    }
    onDateChange(date) {
        this.setState({
            dob:date,
        })
    }
    showCal() {
        
        this.setState({ showCalorie: !this.state.showCalorie }, (data) => {
            console.log(this.state.showCalorie,"callback of set State 2")
        })
    }
    render() {
        return (
            <SafeAreaView>
                <Text style={{color:'green'}}>
                    this is form:
                     </Text>
                <TextInput
                    style={styles.container}
                    placeholder="first name"
                    maxLength={20}
                >
    
                </TextInput>
                <Text >
                    LAST NAME
                    </Text>
                <TextInput
                    style={styles.container}
                    placeholder="last name"
                    maxLength={10}
                >
                    </TextInput>
                <Text >
                    EMAIL:
                    </Text>
                <TextInput style={styles.container}
                placeholder="ex:name@gmail.com" inputMode="email">
                    ex:name@gmail.com
                    </TextInput>
                <Text >
                    DOB
                    </Text><Button title="calender" onPress={this.showCal} />
                {this.state.showCal && <CalendarPicker
                    onDateChange={this.onDateChange} />}
               
                <Text >
                    CONTACT NUMBER:
                    </Text>
                <TextInput style={styles.container}
                    maxLength={10}
                    keyboardType='numeric'
                    placeholder="contact"
                    inputMode="numeric"
                >    
                </TextInput>
                <Button title="SUBMIT" style={{ alignItems: 'center', }}/>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        color: 'blue',
        alignItems: 'center',
        textAlign:'center',
        backgroundColor: 'white',
        borderWidth: 2,
        padding: 10,
        margin:20,
    },
    container2: {
        color: 'black',
        backgroundColor: "blue",
    }
});

export default Form
