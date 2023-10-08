import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../types';
import TopNav from './pages/TopNav';
import { NavigationContainer } from '@react-navigation/native';

const StackNavigator = () => {
    const Stack = createStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='TopNav'>
    <Stack.Screen name="TopNav" component={TopNav} />
  </Stack.Navigator>
    </NavigationContainer>
    
  )
}

export default StackNavigator