import axios from 'axios';
import React, { useEffect } from 'react';

function FetchRecipe() {
  //find recipe by nutrient Cholesterol 50, Carbs 50, Calories 600, Fat 50, num 50, random
  const recipeByNutrient =
    'https://api.spoonacular.com/recipes/findByNutrients?minCholesterol=50&minCarbs=50&ḿinFat=50&ḿinCalories=600&number=20&random=true&apiKey=a7c77eb73d9c496aa2a7698a71175d78';

  //   const [fetchedRecipeId, setFetchedRecipeId] = useState();
  //   const [fetchedRecipeTitle, setFetchedRecipeTitle] = useState();
  //   const [fetchedRecipeImage, setFetchedRecipeImage] = useState();
  //   const [fetchedRecipeCalories, setFetchedRecipeCalories] = useState();
  //   const [fetchedRecipeProtein, setFetchedRecipeProtein] = useState();
  //   const [fetchedRecipeCarbs, setFetchedRecipeCarbs] = useState();
  //   const [fetchedRecipeCholesterol, setFetchedRecipeCholesterol] = useState();
  //   const [fetchedRecipeFat, setFetchedRecipeFat] = useState();

  useEffect(() => {
    axios
      .get(recipeByNutrient)
      .then((response) => response.data)
      .then((data) =>
        //   setFetchedRecipeId(data[0].id),
        //   setFetchedRecipeTitle(data[0].title),
        //   setFetchedRecipeImage(data[0].image),
        //   setFetchedRecipeCalories(data[0].calories),
        //   setFetchedRecipeProtein(data[0].protein),
        //   setFetchedRecipeCarbs(data[0].carbs),
        //   setFetchedRecipeCholesterol(data[0].cholesterol),
        //   setFetchedRecipeFat(data[0].saturatedFat)
        data.filter(
          (elt) => parseInt(elt.calories.slice(0 - 1) > 600) && parseInt(elt.fat.slice(0 - 1) > 50 && parseInt(elt.carbs.slice(0 - 1) > 50)),
        ),
      );
  }, []);

  return (
    <div>
      {/* <p>{fetchedRecipeId}</p>
      <p>{fetchedRecipeTitle}</p>
      <img src={fetchedRecipeImage} alt={fetchedRecipeTitle} />
      <p>{fetchedRecipeCalories}</p>
      <p>{fetchedRecipeProtein}</p>
      <p>{fetchedRecipeCarbs}</p>
      <p>{fetchedRecipeCholesterol}</p>
      <p>{fetchedRecipeFat}</p> */}
    </div>
  );
}

export default FetchRecipe;
