import { useEffect, useState } from "react";

export default function FetchRecipe({ onDataFetch }) {
  const [imageSrc, setImageSrc] = useState(null);
  const categories = ["Vegetarian", "Chicken", "Seafood", "Dessert"];
  // Fetching recipes  from apI
  useEffect(() => {
    async function fetchRecipes() {
      const catData = [];
      for (const category of categories) {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        const resData = await response.json();
        catData.push({ name: category, items: resData.meals });
      }
      onDataFetch(catData);
      //console.log(resData);
      //setImageSrc(resData.meals[0].strMealThumb);
    }
    fetchRecipes();
  }, []);
  return <>{imageSrc && <img src={imageSrc} alt="Fetched Img" />}</>;
}
