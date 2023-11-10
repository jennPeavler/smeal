import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { StarRating } from '../../components/StarRating';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';   

const RecipeCard = ({ id, name, difficulty, cookTime, totalTime, servings, url, imageUrl, ingredients, steps, notes, nutrition, backgroundColor }) => {
  const navigation = useNavigation();
  return (
    <Pressable style={[styles.card, {backgroundColor: backgroundColor}]} onPress={() => navigation.navigate('Recipe', { id, name, difficulty, cookTime, totalTime, servings, url, imageUrl, ingredients, steps, notes, nutrition, backgroundColor })}>
      <Image style={styles.image} source={{ uri: imageUrl}} resizeMode='cover'/>
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>{name}</Text>
        <StarRating />
        <Text style={styles.difficulty}>{difficulty}</Text>
        <View style={styles.footer}>
          <View style={styles.footerContainer}>
            <Ionicons name="timer-outline" size={24} color="white" />
            <Text style={styles.footerContent}>{totalTime}</Text>
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
    height: 120,
    display: 'flex',
    flexDirection: 'row'
  },
  image: {
    height: 120,
    width: 120,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  infoContainer: {
    display: 'flex',
    flex: 1,
    alignitems: 'center',
    padding: 5
  },
  name: {
    color: 'white',
    fontSize: 16,
  },
  difficulty: {
    color: 'white'
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },
  footerContent: {
    color: 'white',
    marginLeft: 5
  },  
});

export default RecipeCard;