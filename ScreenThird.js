import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScreenThird = ({ navigation }) => {
    useEffect(() => {
        getData();
    }, [])
    onSubmit = () => {
        navigation.navigate('Main_screen')
    }
    return (
        <View>
            <Button title="LOGOUT" onPress={() => onSubmit()} />
        </View>
    )
}

export default ScreenThird

const getData = async () => {
    try {
        console.log("inside try");
        const jsonValue = await AsyncStorage.getItem('email')
        //     .then((res) => {
        //     console.log(res, "res is this")
        // });
        console.log(jsonValue, "out side val");
    } catch (e) {
        console.log(e,"error");
    }
    //  return jsonValue != null ? JSON.parse(jsonValue) : null;
}