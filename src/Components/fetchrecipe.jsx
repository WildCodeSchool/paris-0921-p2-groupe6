import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

function FetchRecipe() {
  //find recipe by nutrient: Cholesterol 30, Carbs 30, Calories 400, Fat 30, max sugar 10, random, num 10 during testing, num 300 once in production
  const recipeByNutrient =
    'https://api.spoonacular.com/recipes/findByNutrients?minCholesterol=30&minCarbs=30&minFat=30&minCalories=400&maxSugar=10&number=10&random=true&apiKey=7706683273f24fdcaf86cbbb8929f962';

  const [fetchedRecipe, setFetchedRecipe] = useState();

  useEffect(() => {
    axios
      .get(recipeByNutrient)
      .then((response) => response.data)
      .then((data) => setFetchedRecipe(data.filter((elt) => elt.calories > 650 || parseInt(elt.fat.slice(0, -1)) > 60)));
  }, []);

  return (
    <div>
      <div>{fetchedRecipe && fetchedRecipe.slice(0, 10).map((info, index) => <RecipeCard key={index} {...info} />)}</div>
    </div>
  );
}

export default FetchRecipe;
