import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { color } from '../style_constants'
import ListItem from '../components/ListItem';

import mockUserList from '../mockUserList.json';

const ListScreen = ({ navigation }) => {
  const handleSelectItem = (itemId) => {
    navigation.push('ListItem', { itemId });
  }
  
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%' }}
        data={mockUserList}
        renderItem={({ item }) => <ListItem item={item} onSelectItem={handleSelectItem} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: '10px',
    paddingRight: '10px',
    paddingTop: '10px',
    backgroundColor: color.screenBackgroundColor,
  }
})

export default ListScreen;