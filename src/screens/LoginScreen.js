import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import Input from '../components/Input';
import { setUser } from '../store/actions/user';

const LoginScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((state) => state.user);

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
      return createAlertLogin();
    }

    if (password.trim() === '') { return; }

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
      <Button
        title='Войти'
        color="#bb0d02"
        onPress={handlePressButton}
        style={{ width: '100%' }}
      >
        <Text>
          Войти
        </Text>
      </Button>
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
    backgroundColor: 'white'
  },
  title: {
    fontWeight: 'bold',
    color: '#b5373c',
    fontSize: '38px',
    marginBottom: '30px'
  },
  subTitle: {
    textAlign: 'center',
    color: 'silver',
    fontSize: '14px',
    marginBottom: '25px'
  }
})

export default LoginScreen;