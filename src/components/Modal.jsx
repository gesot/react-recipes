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
  console.log(fetchedInfo);
  if (fetchedInfo) {
    // console.log(fetchedInfo.meals[0]);
    for (let i = 1; i < 21; i++) {
      let ingr = `strIngredient${i}`;
      let meas = `strMeasure${i}`;
      // if (fetchedInfo.meals[0][ingr] != "")
      ingredients[
        i
      ] = `${fetchedInfo.meals[0][meas]} ${fetchedInfo.meals[0][ingr]}`;
    }
    console.log(ingredients);
  }

  return (
    <div className={classes.modalOverlay} onClick={handler}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Title of the card</h2>
        {fetchedInfo && (
          <img src={fetchedInfo.meals[0].strMealThumb} alt="An image"></img>
        )}
        <p></p>
        {fetchedInfo && <p>{ingredients}</p>}
      </div>
    </div>
  );
}
