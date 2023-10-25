import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealCard = ({ day, recipe, difficulty, prepTime, cookTime }) => (
  <View style={styles.card}>
    <Text>{day}</Text>
    <Text>{recipe}</Text>
    <Text>{difficulty}</Text>
    <Text>{prepTime}</Text>
    <Text>{cookTime}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default MealCard;