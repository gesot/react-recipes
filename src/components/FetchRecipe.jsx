import { useEffect, useState } from "react";

export default function FetchRecipe({ onDataFetch }) {
  const [imageSrc, setImageSrc] = useState(null);
  //Categories to be rendered
  const categories = ["Vegetarian", "Chicken", "Seafood", "Dessert"];

  //Shuffle and get 5 random meals
  function getRandomRecipes(arr, count) {
    const shuffledArray = arr.slice(); // Create a copy of the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray.slice(0, count);
  }

  // Fetching recipes  from api
  useEffect(() => {
    async function fetchRecipes() {
      const catData = [];
      for (const category of categories) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const resData = await response.json(); // object with array of objects  {[{},{},{}]}
        const randomMeals = getRandomRecipes(resData.meals, 10); //get 5 random meals to render

        catData.push({ name: category, items: randomMeals });
      }
      onDataFetch(catData);
    }
    fetchRecipes();
  }, []);
  return <>{imageSrc && <img src={imageSrc} alt="Fetched Img" />}</>;
}
