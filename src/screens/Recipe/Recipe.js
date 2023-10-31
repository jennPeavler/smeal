import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { StarRating } from "../../components/StarRating";
import  ChecklistItem  from './ChecklistItem';

const Recipe = ({ route }) => {
  const { id, name, difficulty, cookTime, totalTime, servings, url, imageUrl, ingredients, steps, notes, nutrition, day, backgroundColor } = route.params;
  console.log(backgroundColor)
  return (
    <ScrollView>
      <View style={[styles.header, { backgroundColor }]}>
        <Image style={styles.image} source={{ uri: imageUrl}} resizeMode='cover'/>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.info}><Text style={styles.infoLabel}>{`cook time: `}</Text>{`${cookTime} minutes`}</Text>
          <Text style={styles.info}><Text style={styles.infoLabel}>{`total time: `}</Text>{`${totalTime} minutes`}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.info}><Text style={styles.infoLabel}>{`yield: `}</Text>{servings}</Text>
          <Text style={styles.info}><Text style={styles.infoLabel}>{`difficulty: `}</Text>{difficulty}</Text>
        </View>
        <StarRating />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {ingredients.map(ingredient => <ChecklistItem displayText={ingredient.textDisplay} id={`${id}.${ingredient.name}`} />)}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Instructions</Text>
        {/* {steps.map(step => <View style={styles.step}><Text style={{fontWeight: 'bold'}}>{`${step.number}. `}</Text><Text>{`${step.directions}`}</Text></View>)} */}
        {steps.map(step => <ChecklistItem displayText={step.directions} id={`${id}step#${step.number}`} />)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  recipe: {
    
  },  
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
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  infoLabel: {
    color: 'white',
    fontStyle: 'italic',
    textTransform: 'lowercase'
  },
  info: {
    marginRight: 10,
    textTransform: 'uppercase',
  },
  section: {
    padding: 20
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  step: {
    display: 'flex', 
    flexDirection: 'row',
    marginBottom: 5
  }
});

export default Recipe;