import classes from "./CardList.module.css";
import Card from "./Card";
import { useRef } from "react";

export default function CardList({ recipesData, idx }) {
  const scrollContainerRef = useRef([]);
  const scrollHandler = (index, scrollDirection) => {
    if (scrollDirection === "left") {
      scrollContainerRef.current[index].scrollBy({
        left: -800, // You can adjust the scrolling distance
        behavior: "smooth",
      });
    }
    if (scrollDirection === "right") {
      scrollContainerRef.current[index].scrollBy({
        left: 800, // You can adjust the scrolling distance
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      {recipesData && <h2>{recipesData[idx].name}</h2>}
      <div className={classes.listButton}>
        <div
          className={classes.category}
          ref={(el) => (scrollContainerRef.current[idx] = el)}
        >
          {recipesData &&
            recipesData[idx].items.map((meal) => (
              <Card
                key={meal.idMeal}
                mealId={meal.idMeal}
                cardTitle={meal.strMeal}
                cardImg={meal.strMealThumb}
              />
            ))}
        </div>
        <div className={classes.buttonContainer}>
          <button
            className={classes.navButtonRight}
            onClick={() => {
              scrollHandler(idx, "right");
            }}
          ></button>
          <button
            className={classes.navButtonLeft}
            onClick={() => {
              scrollHandler(idx, "left");
            }}
          ></button>
        </div>
      </div>
    </>
  );
}
