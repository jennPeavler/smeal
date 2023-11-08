import React, { createContext, useState } from 'react';
import { recipes } from '../data/recipes';

export const MealPlanContext = createContext();

export const MealPlanProvider = ({ children }) => {
  const [mealPlan, setMealPlan] = useState([]);
  const [recipeOptions, setRecipeOptions] = useState([]);
  
  const shuffleRecipes = () => {
    for (let i = recipes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [recipes[i], recipes[j]] = [recipes[j], recipes[i]];
    }
    
    setRecipeOptions(recipes.slice(0, 7));
  };

  return (
    <MealPlanContext.Provider value={{ mealPlan, setMealPlan, recipeOptions, shuffleRecipes }}>
      {children}
    </MealPlanContext.Provider>
  );
};