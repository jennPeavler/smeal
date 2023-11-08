import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StarRating } from '../../components/StarRating';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';   

import { colors } from '../../style/colors';

const MealCard = ({ id, name, difficulty, cookTime, totalTime, servings, url, imageUrl, ingredients, steps, notes, nutrition, index, mealPlan, setMealPlan }) => {
  const onSelectRecipe = (event) => {
    event.stopPropagation();

    setMealPlan([...mealPlan, { id, name, difficulty, cookTime, totalTime, servings, url, imageUrl, ingredients, steps, notes, nutrition }]);
  }
  const navigation = useNavigation();
  const backgroundColor = getBackgroundColor(index)
  return (
    <Pressable style={[styles.card, {backgroundColor: backgroundColor}]} onPress={() => navigation.navigate('Recipe', { id, name, difficulty, cookTime, totalTime, servings, url, imageUrl, ingredients, steps, notes, nutrition, backgroundColor })}>
      <Pressable style={[styles.dayContainer, {backgroundColor: backgroundColor}]} onPress={onSelectRecipe}>
        <Text style={styles.day}>SELECT</Text>
      </Pressable>
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

const getBackgroundColor = (index) => {
  switch (index) {
    case 0:
      return colors.blue1;
    case 1:
      return colors.red;
    case 2:
      return colors.green1;
    case 3:
      return colors.orange1;
    case 4:
      return colors.blue1;
    case 5:
      return colors.red;
    case 6:
      return colors.green1;
    
  }
}

export default MealCard;