import React, { useState, useContext, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GroceryItem from './GroceryItem';
import { MealPlanContext } from '../../state/MealPlanContext';

const GroceryList = () => {
  const { mealData } = useContext(MealPlanContext);
  //temporary hard coded data that needs to be replaced with global MealData.
  const [groceryList, setGroceryList] = useState([]);

  useEffect(() => {
    const groceryList = generateGroceryList(mealData);
    setGroceryList(groceryList)
  }, [mealData])

  const renderItem = ({ item }) => {
    return (
    <GroceryItem { ...item } />
  )};

  return (
    <View style={styles.container}>
      <FlatList
        data={groceryList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
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

function generateGroceryList(mealData) {
  const groceryList = {};

  mealData.forEach(meal => {
    meal.ingredients.forEach(ingredient => {
      const key = ingredient.name.toLowerCase().trim();

      if (groceryList[key]) {
        groceryList[key].quantity = parseFloat(groceryList[key].quantity) + parseFloat(ingredient.quantity);
      } else {
        groceryList[key] = {
          name: ingredient.name,
          quantity: ingredient.quantity,
          units: ingredient.units,
        };
      }
    });
  });

  return Object.values(groceryList).map(item => {
    return {
      ...item
    };
  });
}

export default GroceryList;