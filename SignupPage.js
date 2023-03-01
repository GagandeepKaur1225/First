import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { CONSTANTS } from './shared/constants'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignupPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [pass, setPass] = useState('');
    const [passErr, setPassErr] = useState('');
    const [confirmPass, setConfirmPass] = useState(0);
    const [confirm_error, setConfirm_error] = useState("");
    const [nameVal, setNameVal] = useState("");
    const [stateVal, setStateVal] = useState("");
    const [city, setCity] = useState("");
    const [val, setVal] = useState("");
    emailCheck = (value) => {
        console.log(value, "VALUE");
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.length == 0) {
            setEmail("");
            setEmailErr("");
            console.log("empty mail");
        } else if (reg.test(value) !== true) {
            setEmailErr("Enter Correct Email address");
            console.log("test is not passed");
        } else {
            setEmail(value);
            setEmailErr("");
            console.log("passed");
        }
    }
    passwordCheck = (value2) => {
        console.log(value2);
        const reg1 = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        if (value2.length == 0) {
            setPass("");
            setPassErr("");
        } else if (reg1.test(value2) !== true) {
            setPassErr("password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters");

        } else {
            setPass(value2);
            setPassErr("");
            console.log("passed")
        }
    }
    confirmCheck = (value) => {
        console.log("inside check")
        if ((value) === pass) {
            console.log("matched");
            setConfirmPass(1);
            setConfirm_error("");
        }
        else {
            console.log("not matched");
            setConfirmPass(0);
            setConfirm_error("enter the right password");
        }
    }
    onSubmit = () => {
        const storeUser = async () => {
            try {
                const jsonValue1 = await AsyncStorage.getItem('email')
                let changed
                if (jsonValue1) {
                    changed = JSON.parse(jsonValue1)
                    console.log(changed,"printing change")
                    changed.push(dataToStore)
                }
                else {
                    changed=[dataToStore]
                    
                }
                 await AsyncStorage.setItem('email', JSON.stringify(changed))
                console.log("try1")
                const temp = await AsyncStorage.getItem('email')
                console.log(temp,"email fields")
               
            }
            catch (error) {
                console.log(error,"error this error");
            }
        }
        console.log(storeUser());
        console.log("submit pressed");
        navigation.navigate('Main_screen');
    }
    const formData = [
        {
            title: CONSTANTS.NAME,
            placeholder: CONSTANTS.NAME,
            onChange: (value) => setNameVal(value)
        },
        {
            title: CONSTANTS.EMAIL,
            placeholder: CONSTANTS.EMAIL_PLACEHOLDER,
            onChange: (value) => emailCheck(value),
            errorShown: emailErr

        },
        {
            title: CONSTANTS.STATE,
            placeholder: CONSTANTS.STATE_HOLDER,
            onChange: (value) => setStateVal(value)
        },
        {
            title: CONSTANTS.CITY,
            placeholder: CONSTANTS.CITY_HOLDER,
            onChange: (value) => setCity(value)
        },
        {
            title: CONSTANTS.PASSWORD,
            placeholder: CONSTANTS.PASSWORD_PLACEHOLDER,
            onChange: (value2) => passwordCheck(value2),
            errorShown: passErr
        },
        {
            title: CONSTANTS.CONFIRM_HOLDER,
            placeholder: CONSTANTS.CONFIRM_HOLDER,
            onChange: (value) => confirmCheck(value),
            errorShown: confirm_error
        },
    ]
    let dataToStore = {
            nameKey: nameVal,
            emailKey: email,
            stateKey: stateVal,
            cityKey: city,
            passwordKey: pass
    }
   
    return (<SafeAreaView>
        <View style={style.mainView}>
            <Text>SIGNUP PAGE</Text>
            <Text></Text>
            {
                formData.map((i, idx) => {
                    return (
                        <>
                            <Text style={style.titleStyle}>{i.title}</Text>
                            <TextInput style={style.textInputStyle} placeholder={i.placeholder} onChangeText={i.onChange} autoCapitalize='none'>
                            </TextInput>
                            <Text>{i.errorShown}</Text>
                        </>
                    )
                })
            }
            <Button title="SUBMIT"
                style={style.buttonStyle}
                onPress={() => onSubmit()}
            >
            </Button>
        </View>
        </SafeAreaView>
    )
}

export default SignupPage
const style = StyleSheet.create(
    {
        mainView: {
            marginHorizontal: 30
        },
        titleStyle: {
            fontSize: 15,
            padding: 10
        },
        textInputStyle: {
            borderWidth: 2,
            fontSize: 15,
            padding: 10, 
           borderRadius:5
        },
        buttonStyle: {
            padding: 20,
            borderRadius: 2,
            color: '#0000FF',
        }
    }
)

    // storeUser = async () => {
    //     try {
    //         await AsyncStorage.setItem('user', dataToStore);
    //     }
    //     catch (error) {
    //         console.log("error");
    //     }
    // }