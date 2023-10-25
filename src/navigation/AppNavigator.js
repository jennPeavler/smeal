import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealPlan from '../screens/MealPlan/MealPlan';
import GroceryList from '../screens/GroceryList/GroceryList';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MealPlan" component={MealPlan} />
      <Tab.Screen name="GroceryList" component={GroceryList} />
    </Tab.Navigator>
  );
};

export default AppNavigator;