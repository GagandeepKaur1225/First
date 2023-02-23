import React from 'react';
import { Text, TouchableOpacity,View } from "react-native";


export default function Button1({ width,
    height,
    backgroundColor,
    color,
    borderColor,
    fontSize,
    buttonText, }) {
    console.log(width,
        height,
        backgroundColor,
        color,
        borderColor,
        fontSize,
        buttonText, "CHECK");
    return (
        <View>
            <TouchableOpacity style={{ width, height, backgroundColor, color, borderColor, fontSize, alignSelf: 'center' }}>
                <Text>
                {buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}