import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const Cust_but = (props) => {
    // const [focus, setFocus] = useState(false);
    return (
        // <View>
        <TouchableOpacity 
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: 10,
                width: 300,
                alignContent: 'center',
                alignSelf: 'center',
                backgroundColor: '#87CEEB',
                marginVertical: 20,
                marginHorizontal: 100,
                flexDirection: 'row',
                borderRadius: 12,
            }}
            onPress={props.onPress}>
            {props.src?<View style={style2.view1}><Image source={props.src}  style={style2.s1}>{props.image}</Image><Text>{props.name}</Text></View>: <Text style={style2.text}>{props.name}</Text>}
                {/* <Image source={props.src}  style={style2.s1}>{props.image}</Image> */}
                {/* <Text>{props.name}</Text> */}
            </TouchableOpacity>
        // {/* </View> */}
    )
}

export default Cust_but
const style2 = StyleSheet.create({
    s1: {
        height: 40,
        width: 40,
        alignSelf: 'center',
        alignContent:'center'
    },
    view1: {
        marginHorizontal:100,
        alignSelf: 'center',
        flex: 2,
        flexDirection: "row",
        alignItems:'center'
    },
    text: {
        fontSize:30
    }
})
