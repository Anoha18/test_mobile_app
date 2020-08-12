
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Input = ({
  secure,
  email,
  number,
  phone,
  labelColor,
  label,
  styleWrapper,
  value,
  changeValue
}) => {
  const [isFoccused, setIsFoccused] = useState(false);

  const keyboardType = email ? 'email-address' : number ? 'numeric' : phone ? 'phone-pad' : 'default';

  return (
    <View style={{...styles.wrapper, ...styleWrapper}}>
      <Text style={{
        color: labelColor || 'black',
        position: 'absolute',
        left: 20,
        top: !isFoccused && !value ? 15 : -5,
        fontSize: !isFoccused && !value ? 18 : 14
      }}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        secureTextEntry={secure}
        keyboardType={keyboardType}
        onFocus={() => setIsFoccused(true)}
        onBlur={() => setIsFoccused(false)}
        value={value}
        onChangeText={changeValue}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    paddingTop: '20px'
  },
  input: {
    borderBottomColor: 'silver',
    borderBottomWidth: '1px',
    width: '100%',
    paddingLeft: '20px',
    height: 50
  },
  fill: {
    borderWidth: 0,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
  },
  hint: {
    position: 'absolute',
  },
})

export default Input;