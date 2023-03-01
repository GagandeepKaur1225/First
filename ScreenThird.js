import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';


const ScreenThird = ({ navigation }) => {
    useEffect(() => {
        getData();
    }, [])
    onSubmit = () => {
        getLoginState();
        navigation.navigate('Main_screen')
    }
    return (
        <SafeAreaView>
            <Button title="LOGOUT" onPress={() => onSubmit()} />
        </SafeAreaView>
    )
}

export default ScreenThird

const getData = async () => {
    try {
        console.log("inside try");
        const jsonValue = await AsyncStorage.getItem('email')
        console.log(jsonValue, "out side val");
        // await AsyncStorage.setItem('loginState', JSON.stringify(false));
        const temporary=await AsyncStorage.getItem('loginState');
        const pasedKey2 = JSON.parse(temporary);
        console.log(pasedKey2, "showing login status");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
        
    } catch (e) {
        console.log(e, "error");
    }
}
const getLoginState = async () => {
    try {
        
        await AsyncStorage.setItem('loginState', JSON.stringify(false));
        const temporary=await AsyncStorage.getItem('loginState');
        const pasedKey = JSON.parse(temporary);
        console.log(pasedKey, "showing login status");
    
        
    } catch (e) {
        console.log(e, "error");
    }
}