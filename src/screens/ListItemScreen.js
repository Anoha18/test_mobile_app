import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/actions/user';

import { color } from '../style_constants';

import mockUserList from '../mockUserList.json';

const ListItemScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { itemId } = route.params;
  const user = mockUserList.find(user => user.id === itemId);

  const handlePressLogoutButton = () => dispatch(setUser(null));

  if (!user) {
    return (
      <View style={styles.emptyContainer}>
        <Text>
          Нет данных
        </Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          {user.name || ''}
        </Text>
        <Text style={styles.content} >
          {(user.text && `"${user.text}"`) || ''}
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={{ color: color.headerBackgroundColor }}>
            Назад
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePressLogoutButton} style={styles.logoutButton}>
          <Text style={{ color: color.screenBackgroundColor }}>
            Выйти из аккаунта
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: color.screenBackgroundColor
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: color.screenBackgroundColor,
  },
  contentContainer: {
    padding: '15px'
  },
  title: {
    fontWeight: '600',
    marginBottom: '15px',
    fontSize: '16px'
  },
  content: {
    color: color.gray,
    fontSize: '16px',
    lineHeight: '25px'
  },
  backButton: {
    borderColor: color.red,
    backgroundColor: color.screenBackgroundColor,
    borderWidth: '1px',
    width: '50%',
    alignItems: 'center',
    padding: '20px'
  },
  logoutButton: {
    backgroundColor: color.red,
    width: '50%',
    alignItems: 'center',
    padding: '20px'
  },  
  footerContainer: {
    flexDirection: 'row',
    width: '100%'
  }
})

export default ListItemScreen;