import React, { useContext, useEffect } from 'react';
import { View, FlatList, StyleSheet, Pressable, Text } from 'react-native';
import MealCard from './MealCard';
import { colors } from '../../style/colors';
import { MealPlanContext } from '../../state/MealPlanContext';

const MealPlan = () => {
  const { mealPlan, setMealPlan, recipeOptions, shuffleRecipes } = useContext(MealPlanContext);

  useEffect(() => {
    shuffleRecipes();
  }, [])

  const renderItem = ({ item, index }) => (
    <MealCard {...item} index={index} setMealPlan={setMealPlan} mealPlan={mealPlan} />
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={shuffleRecipes} style={styles.shuffleButton}>
        <Text style={styles.shuffleButtonText}>Shuffle Recipes</Text>
      </Pressable>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={recipeOptions}
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
    alignItems: 'center',
    backgroundColor: colors.green2
  },
  shuffleButton: {
    backgroundColor: colors.green1,
    padding: 12,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 15,
  },
  shuffleButtonText: {
    fontSize: 15,
    color: 'white'
  }
});

export default MealPlan;