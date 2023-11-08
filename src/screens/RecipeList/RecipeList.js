import React, { useState, useContext, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { MealPlanContext } from '../../state/MealPlanContext';

const RecipeList = () => {
  const { mealPlan } = useContext(MealPlanContext);
  return (
    <View><Text>Hi dare Recipe List</Text></View>
  )
}

export default RecipeList;