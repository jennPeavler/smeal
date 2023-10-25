import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import MealCard from './MealCard';

const MealPlan = () => {
  const [mealData, setMealData] = useState([
    { day: 'Monday', recipe: 'Grilled Fish', difficulty: 'easy', prepTime: '2o minutes', cookTime: '15 minutes' },
    { day: 'Tuesday', recipe: 'Beef Stir-fry', difficulty: 'medium', prepTime: '1o minutes', cookTime: '25 minutes' },
    { day: 'Wednesday', recipe: 'Vegetable Curry', difficulty: 'hard', prepTime: '15 minutes', cookTime: '35 minutes' },
  ]);

  const renderItem = ({ item: { day, recipe, difficulty, prepTime, cookTime } }) => (
    <MealCard day={day} recipe={recipe} difficulty={difficulty} prepTime={prepTime} cookTime={cookTime} />
  );

  const generateMealPlan = () => {
    // Logic to randomly generate a meal plan
  };

  return (
    <View style={styles.container}>
      <Button title="Plan Meals" onPress={generateMealPlan} />
      <FlatList
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