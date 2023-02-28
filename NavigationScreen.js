import React from 'react'
import { View, Text } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form_task from './Form_task';
import SignupPage from './SignupPage';
import ScreenThird from './ScreenThird';

const NavigationScreen = () => {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main_screen">
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
