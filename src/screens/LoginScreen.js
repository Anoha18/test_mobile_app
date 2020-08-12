import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import { setUser } from '../store/actions/user';
import { color } from '../style_constants'

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const createAlertLogin = () => (
    Alert.alert(
      'Логин не должен быть пустой',
      null,
      [
        {
          text: 'OK',
        }
      ]
    )
  )

  const handlePressButton = () => {
    if (login.trim() === '') {
      Alert.alert(
        'Логин не должен быть пустой',
      )

      return;
    }

    if (password.trim() === '') { 
      Alert.alert(
        'Пароль не должен быть пустой',
      )
      return;
    }

    dispatch(setUser({ login, password }));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Вход
      </Text>
      <Text style={styles.subTitle}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Commodi harum quam cupiditate iusto, esse, in laboriosam ipsa quo et ut obcaecati sit optio cumque asperiores?
        Quaerat amet dolore necessitatibus odit.
      </Text>
      <Input
        label='Логин'
        labelColor='gray'
        styleWrapper={{ width: '100%', marginBottom: '20px' }}
        changeValue={(value) => setLogin(value)}
        value={login}
      />
      <Input
        label='Пароль'
        labelColor='gray'
        styleWrapper={{ width: '100%', marginBottom: '20px' }}
        changeValue={(value) => setPassword(value)}
        value={password}
        secure
      />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handlePressButton}
      >
        <Text style={{color: color.headerTitleColor, fontSize: '14px', fontWeight: '500'}}>
          Войти
        </Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingTop: '40px',
    backgroundColor: color.screenBackgroundColor
  },
  title: {
    fontWeight: 'bold',
    color: color.red,
    fontSize: '38px',
    marginBottom: '30px'
  },
  subTitle: {
    textAlign: 'center',
    color: color.gray,
    fontSize: '14px',
    marginBottom: '25px'
  },
  loginButton: {
    backgroundColor: color.headerBackgroundColor,
    width: '75%',
    alignItems: 'center',
    borderRadius: '5px',
    padding: '12px'
  }
})

export default LoginScreen;