import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Custom_const = (props) => {
    const [focus, setFocus] = useState(false);
    return (
        <TextInput
            style={
                focus?[styles.focused,styles.normal]:[styles.normal]
            }
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            onChangeText={props.onChangeText}
            autoCapitalize="none"
            secureTextEntry={props.secureTextEntry}
            // autoFocus={props.autoFocus}
        ></TextInput>
    )
}
const styles = StyleSheet.create(
    {
        normal: {
            alignItems: 'center',
            // backgroundColor: 'white',
            height: 40, width: 270
            ,
            
        },
       focused: {
        alignItems: 'center',
        // backgroundColor: 'white',
           height: 40,
           width: 250,
           borderColor: '#0000FF',
           borderWidth: 2,
           borderRadius: 2
       }
    }
)
export default Custom_const
// style={[{
            //     alignItems: 'center',
            //     backgroundColor: 'white',
            //     height: 40, width: 250

            // }], focus && { borderColor: "red" }
            // }