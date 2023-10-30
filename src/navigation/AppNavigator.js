import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealPlan from '../screens/MealPlan/MealPlan';
import GroceryList from '../screens/GroceryList/GroceryList';
import Recipe  from '../screens/Recipe/Recipe';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MealPlan" component={MealPlan} />
      <Tab.Screen name="GroceryList" component={GroceryList} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
};

export default AppNavigator;