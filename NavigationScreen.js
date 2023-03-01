import React,{useEffect,useState} from 'react'
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form_task from './Form_task';
import SignupPage from './SignupPage';
import ScreenThird from './ScreenThird';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NavigationScreen = () => {
    const [parsedValue, setParsedValue] = useState(false);
    useEffect(() => {
        getDataLogin();
    }, [])
    getDataLogin = async () => {
        try {
            temp=await AsyncStorage.getItem('email');
            userLoggedIn = await AsyncStorage.getItem('loginState');
            setParsedValue(JSON.parse(userLoggedIn));
            console.log(temp,parsedValue,"check users");
            
        }
        catch (e) {
            console.log(e,"showing error for navigation main")
        }
    }
    console.log(parsedValue,"USERRRRR","first thing");
    const Stack = createNativeStackNavigator();
    
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={parsedValue ?"ThirdScreen":'Main_screen' }
            >
                <Stack.Screen
                    name="Main_screen"
                    component={Form_task}
                    options={{title:'switch'}}
                />
                <Stack.Screen
                name="Screen_for_signup"
                component={SignupPage}
                options={{title:'back'}}
                />
                <Stack.Screen
                    name="ThirdScreen"
                    component={ScreenThird}
                    options={{title:'end'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationScreen
