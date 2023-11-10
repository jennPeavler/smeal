import React, { useContext } from 'react';
import { Text, FlatList } from 'react-native';
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
      ListEmptyComponent={<Text style={{ padding: 16 }}>Set a meal plan to generate a recipe list</Text>}
    />
  )
}

export default RecipeList;