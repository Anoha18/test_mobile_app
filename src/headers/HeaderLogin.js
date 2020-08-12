import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import { color, font } from '../style_constants'

const HeaderLogin = ({ title }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <View style={styles.container}>
        <Text style={styles.title}>
          {(user && user.login) || ''}
        </Text>
        <AntDesign style={{marginLeft: '10px'}} name='user' size={24} color='white' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    color: color.headerTitleColor,
    fontWeight: font.headerFontWeight,
    fontSize: font.headerFontSize
  }
})

export default HeaderLogin;