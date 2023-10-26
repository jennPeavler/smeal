import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
// import { Image } from 'expo-image';

import { colors } from '../../style/colors';

const MealCard = ({ day, name, difficulty, prepTime, cookTime, imageUrl }) => (
  <View style={[styles.card, {backgroundColor: getBackgroundColor(day)}]}>
    <View style={[styles.dayContainer, {backgroundColor: getBackgroundColor(day)}]}>
      <Text style={styles.day}>{day}</Text>
    </View>
    <Image style={styles.image} source={{ uri: imageUrl}} resizeMode='cover'/>
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.difficulty}>{difficulty}</Text>
      <Text style={styles.cookTime}>{cookTime}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    height: 350
  },
  dayContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 15,
    left: 15,
    borderRadius: 5,
    padding: 2
  },
  day: {
    fontSize: 16,
    color: 'white',
  },
  image: {
    height: 175,
    width: 200,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  textContainer: {
    padding: 15
  },
  name: {
    color: 'white',
    fontSize: 25,
  }
});

const getBackgroundColor = (day) => {
  switch (day) {
    case 'Monday':
      return colors.blue1;
    case 'Tuesday':
      return colors.yellow;
    case 'Wednesday':
      return colors.green1;
    case 'Thursday':
      return colors.orange1;
    case 'Friday':
      return colors.blue1;
    case 'Saturday':
      return colors.yellow;
    case 'Sunday':
      return colors.green1;
    
  }
}

export default MealCard;