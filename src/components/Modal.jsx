/* Modal.js */
import classes from "./Modal.module.css";
import { useEffect, useState } from "react";

export default function Modal({ handler, id }) {
  const [fetchedInfo, setFetchedInfo] = useState(null);
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
  return (
    <div className={classes.modalOverlay} onClick={handler}>
      <div
        className={classes.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Title of the card</h2>
        <img src="" alt="An image"></img>
        <p></p>
        {fetchedInfo && <p>{fetchedInfo.meals[0].strIngredient1}</p>}
      </div>
    </div>
  );
}
