import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const LoginScreen = ({ route, navigation }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

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
      <TextInput
        placeholder="Логин"
        style={styles.input}
      />
      <TextInput
        placeholder="Пароль"
        secureTextEntry={true}
        style={styles.input}
      />
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
    // justifyContent: 'center',
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
    fontSize: '14px'
  },
  input: {
    borderBottomColor: 'silver',
    borderBottomWidth: '1px',
    width: '100%',
    padding: '10px'
  }
})

export default LoginScreen;