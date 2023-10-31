import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native';
import Checkbox from 'expo-checkbox';

import { colors } from '../../style/colors';

const ChecklistItem = ({ displayText, id }) => {
  const [isChecked, setChecked] = useState(false)
  return (
    <View style={styles.itemContainer} key={id}>
      <Checkbox value={isChecked} onValueChange={setChecked} color={isChecked ? `${colors.blue3}` : undefined} style={styles.checkbox}/>
      <Text style={styles.ingredient}>{displayText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  checkbox: {
    marginRight: 5
  },
  ingredient: {
    fontSize: 15,
    marginBottom: 1
  }
});

export default ChecklistItem;