import { useEffect, useState } from "react";

export default function FetchRecipe() {
  const [imageSrc, setImageSrc] = useState(null);
  // Fetching recipes  from apI
  useEffect(() => {
    async function fetchRecipes() {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const resData = await response.json();
      console.log(resData);
      console.log(resData);
      console.log(resData.meals[0].strMealThumb);
      setImageSrc(resData.meals[0].strMealThumb);
    }
    // fetchRecipes();
  }, []);
  return <>{imageSrc && <img src={imageSrc} alt="Fetched Img" />}</>;
}
