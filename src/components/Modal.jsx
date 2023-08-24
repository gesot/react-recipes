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
      ] = `${fetchedInfo.meals[0][meas]}${fetchedInfo.meals[0][ingr]}`;
    }
  }
  return (
    <div className={classes.modalOverlay} onClick={handler}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Title of the card</h2>
        <img src="" alt="An image"></img>
        <p></p>
        {fetchedInfo && <p>{ingredients}</p>}
      </div>
    </div>
  );
}
