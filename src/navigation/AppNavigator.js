import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealPlan from '../screens/MealPlan/MealPlan';
import GroceryList from '../screens/GroceryList/GroceryList';
import Recipe  from '../screens/Recipe/Recipe';
import RecipeList from '../screens/RecipeList/RecipeList';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../style/colors';

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'MealPlan') {
            return <MaterialCommunityIcons name="silverware-fork-knife" size={size} color={color} />;
          } else if (route.name === 'RecipeList') {
            return <FontAwesome name="list-ul" size={size} color={color} />
          } else {
            return <MaterialIcons name="local-grocery-store" size={size} color={color} />
          }
        },
        tabBarActiveTintColor: colors.blue1,
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          backgroundColor: colors.orange2
        }
      })}
    >
      <Tab.Screen name="MealPlan" component={MealPlan} options={{
        title: "Meal Plan",
        headerStyle: { backgroundColor: colors.orange2 },
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