import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import MealCard from './MealCard';

const MealPlan = () => {
  const imageUrl = 'https://picsum.photos/200/175';
  const [mealData, setMealData] = useState([
    { day: 'Monday', name: 'Grilled Fish', difficulty: 'easy', prepTime: '2o minutes', cookTime: '15 minutes', imageUrl },
    { day: 'Tuesday', name: 'Beef Stir-fry', difficulty: 'medium', prepTime: '1o minutes', cookTime: '25 minutes', imageUrl },
    { day: 'Wednesday', name: 'Vegetable Curry', difficulty: 'hard', prepTime: '15 minutes', cookTime: '35 minutes', imageUrl },
    { day: 'Thursday', name: 'Grilled Fish', difficulty: 'easy', prepTime: '2o minutes', cookTime: '15 minutes', imageUrl },
    { day: 'Friday', name: 'Beef Stir-fry', difficulty: 'medium', prepTime: '1o minutes', cookTime: '25 minutes', imageUrl },
    { day: 'Saturday', name: 'Vegetable Curry', difficulty: 'hard', prepTime: '15 minutes', cookTime: '35 minutes', imageUrl },
    { day: 'Sunday', name: 'Vegetable Curry', difficulty: 'hard', prepTime: '15 minutes', cookTime: '35 minutes', imageUrl },
  ]);

  const renderItem = ({ item: { day, name, difficulty, prepTime, cookTime, imageUrl } }) => (
    <MealCard day={day} name={name} difficulty={difficulty} prepTime={prepTime} cookTime={cookTime} imageUrl={imageUrl} />
  );

  const generateMealPlan = () => {
    // Logic to randomly generate a meal plan
  };

  return (
    <View style={styles.container}>
      <Button title="Plan Meals" onPress={generateMealPlan} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={mealData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealPlan;