import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native';

const Recipe = ({ route }) => {
  const { id, name, difficulty, cookTime, totalTime, servings, url, imageUrl, ingredients, steps, notes, nutrition, day, backgroundColor } = route.params;
  console.log(backgroundColor)
  return (
    <View>
      <View style={[styles.header, { backgroundColor }]}>
        <Image style={styles.image} source={{ uri: imageUrl}} resizeMode='cover'/>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: 20
  },  
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderColor: 'white',
    borderWidth: 1
  },
  name: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    textAlign: 'center'
  }
});

export default Recipe;