import React from 'react'
import { View, Text } from 'react-native'

const Custom_in = (props) => {
    return (
        <View>
            <Text>                
                {props.name}
                {props.required ? <Text style={{ color:'red' }}>*</Text> : null}
            </Text>
        </View>
    )
}

export default Custom_in
