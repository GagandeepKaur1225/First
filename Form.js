import React, { Component } from 'react'
import { Text, View, StyleSheet, DatePickerIOSComponent, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import DatePicker from 'react-native-date-picker'

export class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            dob: new Date(),
            contact: '',
            showCalender: false,
            emailErr: "",
            validated: false,
        };
        this.onDateChange = this.onDateChange.bind(this);
        this.showCal = this.showCal.bind(this);

    }
    onSubmit = (data) => { console.log(data) }
    go = () => {
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(this.state.email) !== true) {
            this.setState({ emailErr: "Enter Correct Email address" });
        } else {
            this.setState({ emailErr: "" })
        }
    }

    onDateChange(date) {
        this.setState({
            dob: new Date(date),
        })
    }

    showCal() {
        this.setState(
            prevState => {
                return {
                    showCalender: !prevState.showCalender,
                };
            }
        )
    }

    render() {
        console.log(this.state.emailErr)
        return (
            <SafeAreaView>


                <Text style={{ color: 'green' }}>
                    this is form:
                     </Text>

                <Text >
                    FIRST NAME
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
                    placeholder="ex:name@gmail.com"
                    inputMode="email"
                    autoCapitalize={false}
                    onChangeText={this.go.bind(this)}>

                </TextInput>
                <Text style={{ color: "red" }}>
                    {this.state.emailErr}
                </Text>

                <Text >
                    DOB:
                    </Text>
                <TouchableOpacity style={styles.container} onPress={this.showCal}>
                    <Text>
                        {this.state.dob.toString()}
                    </Text>
                </TouchableOpacity>

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
                <Button title="SUBMIT" style={{ alignItems: 'center', }} onPress={this.handleSubmit} />

                <DatePicker
                    modal
                    open={this.state.showCalender}
                    date={this.state.dob}
                    onCancel={this.showCal}
                    onConfirm={this.onDateChange}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        color: 'blue',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        padding: 10,
        margin: 20,
    },
    container2: {
        color: 'black',
        backgroundColor: "blue",
    }
});

export default Form

{/* { this.state.showCalorie ?
    <CalendarPicker
    firstname
    onDateChange={() => {
        this.onDateChange
        this.setState({showCalorie : !this.state.showCal})
    }} />
:null} */}