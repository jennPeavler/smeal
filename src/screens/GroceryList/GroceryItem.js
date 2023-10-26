import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

import { colors } from '../../style/colors';

const GroceryItem = ({ name }) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <View style={styles.itemContainer}>
      <Text>{name}</Text>
      <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? `${colors.blue3}` : undefined}/>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GroceryItem;