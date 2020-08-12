import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import ListScreen from '../screens/ListScreen';
import ListItemScreen from '../screens/ListItemScreen';

import HeaderLogin from '../headers/HeaderLogin';
import { useSelector } from 'react-redux';

import { color, font } from '../style_constants'

const Stack = createStackNavigator();

export const AppNavigation = ({ navigation }) => {
  const { user } = useSelector((state) => state.user);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <Stack.Screen
            name='Login'
            options={{
              title: 'Вход в личный кабинет',
              headerStyle: {
                backgroundColor: color.headerBackgroundColor,
              },
              headerTitleStyle: {
                color: color.headerTitleColor,
                fontWeight: font.headerFontWeight
              }
            }}
            component={LoginScreen}
          />
        ) : (
          <>
            <Stack.Screen
              name='List'
              component={ListScreen}
              options={{
                headerTitle: () => <HeaderLogin title='Список' />,
                title: 'Список',
                headerStyle: {
                  backgroundColor: color.headerBackgroundColor,
                },
              }}
            />
            <Stack.Screen
              name='ListItem'
              component={ListItemScreen}
              options={{
                headerTitle: () => <HeaderLogin title='График' />,
                title: 'График',
                headerStyle: {
                  backgroundColor: color.headerBackgroundColor,
                },
                headerTintColor: color.headerTitleColor
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
};
