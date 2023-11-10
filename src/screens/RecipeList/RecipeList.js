import React, { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MealPlanContext } from '../../state/MealPlanContext';
import RecipeCard from './RecipeCard';

const RecipeList = () => {
  const { mealPlan } = useContext(MealPlanContext);

  const renderItem = ({ item }) => {
    return <RecipeCard {...item} />;
  };

  return (
    <FlatList
      data={mealPlan}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={<Text>Set a meal plan to generate a recipe list</Text>}
    />
  )
}

export default RecipeList;