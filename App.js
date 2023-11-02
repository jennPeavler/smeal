import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { MealPlanProvider } from './src/state/MealPlanContext';

export default function App() {
  return (
    <MealPlanProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </MealPlanProvider>
  );
}
