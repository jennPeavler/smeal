import React, { useContext, useEffect } from 'react';
import { View, FlatList, StyleSheet, Pressable, Text } from 'react-native';
import MealCard from './MealCard';
import { colors } from '../../style/colors';
import { MealPlanContext } from '../../state/MealPlanContext';

const MealPlan = () => {
  const { mealData, generateMealPlan } = useContext(MealPlanContext);

  useEffect(() => {
    generateMealPlan();
  }, [generateMealPlan])

  const renderItem = ({ item }) => (
    <MealCard {...item} />
  );

  return (
    <View style={styles.container}>
      <Pressable onPress={generateMealPlan} style={styles.shuffleButton}>
        <Text style={styles.shuffleButtonText}>Shuffle Meal Plan</Text>
      </Pressable>
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