import React, { useContext } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import { MealPlanContext } from '../../state/MealPlanContext';
import RecipeCard from './RecipeCard';
import { colors } from '../../style/colors';

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
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.green2,
    paddingTop: 10
  },
});

export default RecipeList;