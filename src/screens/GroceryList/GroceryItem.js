import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

import { colors } from '../../style/colors';

const GroceryItem = ({ name, quantity, units }) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <View style={styles.itemContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
        {units && <Text style={styles.units}>{units}</Text>}
        <Text style={styles.name}>{name}</Text>
      </View>
      <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? `${colors.blue3}` : undefined}/>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  textContainer: {
    flexDirection: 'row'
  },
  quantity: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 15
  },
  units: {
    marginRight: 5
  }
});

export default GroceryItem;