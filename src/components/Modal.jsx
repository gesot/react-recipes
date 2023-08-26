/* Modal.js */
import classes from "./Modal.module.css";
import { useEffect, useState } from "react";

export default function Modal({ handler, id }) {
  const [fetchedInfo, setFetchedInfo] = useState(null);
  const ingredients = [];
  useEffect(() => {
    async function fetchInfo() {
      const idRes = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const idData = await idRes.json();
      setFetchedInfo(idData);
    }
    fetchInfo();
  }, []);
  if (fetchedInfo) console.log(fetchedInfo);
  if (fetchedInfo) {
    for (let i = 1; i < 21; i++) {
      let ingr = `strIngredient${i}`;
      let meas = `strMeasure${i}`;
      ingredients[
        i
      ] = `${fetchedInfo.meals[0][meas]} ${fetchedInfo.meals[0][ingr]}`;
      ingredients[i] = ingredients[i].trim();
    }
  }
  return (
    <div className={classes.modalOverlay} onClick={handler}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.modalImgIng}>
          <div className={classes.titImg}>
            {fetchedInfo && <h3>{fetchedInfo.meals[0].strMeal}</h3>}
            {fetchedInfo && (
              <img
                className={classes.modalImage}
                src={fetchedInfo.meals[0].strMealThumb}
                alt="An image"
              ></img>
            )}
          </div>
          <div className={classes.titImg}>
            <h3>Ingredients:</h3>
            {fetchedInfo && (
              <ul>
                {ingredients.map(
                  (ingredient, index) =>
                    ingredient != "" &&
                    ingredient != "null null" &&
                    ingredient != null && <li key={index}>{ingredient}</li>
                )}
              </ul>
            )}
          </div>
        </div>
        <h3>Instructions:</h3>
        {fetchedInfo && <p>{fetchedInfo.meals[0].strInstructions}</p>}
      </div>
    </div>
  );
}
