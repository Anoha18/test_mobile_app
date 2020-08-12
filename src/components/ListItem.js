import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { color } from '../style_constants';

const ListItem = ({ item, onSelectItem }) => {
  return (
    <TouchableOpacity onPress={() => onSelectItem(item.id)} style={styles.container}>
      <Text style={styles.title}>
        {item.name || ''}
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    padding: '15px',
    borderWidth: '1px',
    borderColor: color.gray,
    width: '100%',
    marginBottom: '15px'
  },
  title: {
    fontWeight: '600'
  }
})

export default ListItem;