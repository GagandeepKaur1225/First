import React,{useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Touchable } from 'react-native'


const Custom_opac = () => {
    const [focus, setFocus] = useState(false);
    return (
        <TouchableOpacity style={
            focus?[styles.focused,styles.normal]:[styles.normal]
        }
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
        >
            
        </TouchableOpacity>
        
    )
}
const styles = StyleSheet.create(
    {
        normal: {
            borderWidth: 2,
            borderRadius: 8,
            marginBottom: 20,
            marginTop: 10, height: 40,
            flexDirection: 'row',
            justifyContent: "space-between"
            },
       focused: {
        alignItems: 'center',
        backgroundColor: 'white',
           height: 40, width: 310,
           
           borderWidth: 2,
           borderRadius: 2,
           borderColor:'#0000FF'
       }
    }
)
export default Custom_opac
