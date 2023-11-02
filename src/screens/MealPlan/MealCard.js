import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StarRating } from '../../components/StarRating';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';   

import { colors } from '../../style/colors';

const MealCard = ({ id, name, difficulty, cookTime, totalTime, servings, url, imageUrl, ingredients, steps, notes, nutrition, day }) => {
  const navigation = useNavigation();
  const backgroundColor = getBackgroundColor(day)
  return (
    <Pressable style={[styles.card, {backgroundColor: backgroundColor}]} onPress={() => navigation.navigate('Recipe', { id, name, difficulty, cookTime, totalTime, servings, url, imageUrl, ingredients, steps, notes, nutrition, day, backgroundColor })}>
      <View style={[styles.dayContainer, {backgroundColor: backgroundColor}]}>
        <Text style={styles.day}>{day}</Text>
      </View>
      <Image style={styles.image} source={{ uri: imageUrl}} resizeMode='cover'/>
      <View style={styles.textContainer}>
        <Text style={styles.name} numberOfLines={2}>{name}</Text>
        <StarRating />
        <Text style={styles.difficulty}>{difficulty}</Text>
        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <Ionicons name="timer-outline" size={24} color="white" />
            <Text style={styles.footerContent}>{cookTime}</Text>
          </View>
          <View style={styles.footerContainer}>
            <FontAwesome5 name="utensil-spoon" size={20} color="white" />
            <Text style={styles.footerContent}>{servings}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    height: 350,
    width: 200
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
    fontSize: 20,
  },
  difficulty: {
    color: 'white'
  },  
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  footerContent: {
    color: 'white',
    marginLeft: 5
  },
});

const getBackgroundColor = (day) => {
  switch (day) {
    case 'Monday':
      return colors.blue1;
    case 'Tuesday':
      return colors.red;
    case 'Wednesday':
      return colors.green1;
    case 'Thursday':
      return colors.orange1;
    case 'Friday':
      return colors.blue1;
    case 'Saturday':
      return colors.red;
    case 'Sunday':
      return colors.green1;
    
  }
}

export default MealCard;