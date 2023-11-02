import React, { createContext, useState } from 'react';
import { recipes } from '../data/recipes';

export const MealPlanContext = createContext();

export const MealPlanProvider = ({ children }) => {
  const [mealData, setMealData] = useState([]);
  
  const generateMealPlan = () => {
    recipes[0].day = 'Monday';
    recipes[1].day = 'Tuesday';
    recipes[2].day = 'Wednesday';
    recipes[3].day = 'Thursday';
    recipes[4].day = 'Friday';
    recipes[5].day = 'Saturday';
    recipes[6].day = 'Sunday';
    setMealData(recipes);
  };

  return (
    <MealPlanContext.Provider value={{ mealData, generateMealPlan }}>
      {children}
    </MealPlanContext.Provider>
  );
};