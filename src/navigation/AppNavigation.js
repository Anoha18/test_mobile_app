import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const DefaultNavigation = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" options={{ title: 'Вход в личный кабинет' }} component={LoginScreen} />
  </Stack.Navigator>
);

export const AppNavigation = () => (
  <NavigationContainer>
    <DefaultNavigation />
  </NavigationContainer>
);
