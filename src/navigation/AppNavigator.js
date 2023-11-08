import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealPlan from '../screens/MealPlan/MealPlan';
import GroceryList from '../screens/GroceryList/GroceryList';
import Recipe  from '../screens/Recipe/Recipe';
import RecipeList from '../screens/RecipeList/RecipeList';
import { colors } from '../style/colors';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MealPlan" component={MealPlan} options={{
        title: "Meal Plan",
        headerStyle: { backgroundColor: colors.yellow },
        headerTintColor: 'white',
        headerTintStyle: { fontWeight: 'bold' }
      }}/>
      <Tab.Screen name="RecipeList" title="Recipe List" component={RecipeList} />
      <Tab.Screen name="GroceryList" title="Grocery List" component={GroceryList} />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
};

export default AppNavigator;