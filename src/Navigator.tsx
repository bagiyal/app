import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from '../types';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TopNav from './pages/TopNav';
const Navigator = () => {
  const Drawer = createDrawerNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TopNav" screenOptions={{
        headerTitle: 'Iskon Dehradun',
        headerTitleAlign: 'center',
        // headerTintColor:'yellow',
      }}
      >
        <Drawer.Screen name="TopNav" component={TopNav} options={{
          drawerItemStyle: { display: 'none' }
        }} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
