import React from 'react'


import {createNativeStackNavigator} from '@react-navigation/native-stack';

import OnboardingScreen from '../The Right Side/OnboardingScreen';
import LoginScreen from '../LoginScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
    </Stack.Navigator>
  )
}

export default AuthStack