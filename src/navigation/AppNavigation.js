import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const DefaultNavigation = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen
      name="Login"
      options={{
        title: 'Вход в личный кабинет',
        headerStyle: {
          backgroundColor: '#bb0d02',
        },
        headerTitleStyle: {
          color: 'white',
          fontWeight: '400'
        }
      }}
      component={LoginScreen}
    />
  </Stack.Navigator>
);

export const AppNavigation = () => (
  <NavigationContainer>
    <DefaultNavigation />
  </NavigationContainer>
);
