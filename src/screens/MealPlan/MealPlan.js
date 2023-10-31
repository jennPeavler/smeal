import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import MealCard from './MealCard';
import { recipes } from '../../data/recipes';

const MealPlan = () => {
  const [mealData, setMealData] = useState([]);

  const renderItem = ({ item }) => (
    <MealCard {...item} />
  );

  const generateMealPlan = () => {
    recipes[0].day = 'Monday';
    recipes[1].day = 'Tuesday';
    recipes[2].day = 'Wednesday';
    recipes[3].day = 'Thursday';
    recipes[4].day = 'Friday';
    recipes[5].day = 'Saturday';
    // recipes[0].day = 'Sunday';
    setMealData(recipes);
  };

  return (
    <View style={styles.container}>
      <Button title="Plan Meals" onPress={generateMealPlan} />
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={mealData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
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