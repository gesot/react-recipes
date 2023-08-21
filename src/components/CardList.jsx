import classes from "./CardList.module.css";
import Card from "./Card";
import { useRef } from "react";

export default function CardList({ recipesData }) {
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
      <div className={classes.wrapper}>
        {recipesData && <h2>{recipesData[0].name}</h2>}
        <div className={classes.listButton}>
          <div
            className={classes.category}
            ref={(el) => (scrollContainerRef.current[0] = el)}
          >
            {recipesData &&
              recipesData[0].items.map((meal) => (
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
                scrollHandler(0, "right");
              }}
            ></button>
            <button
              className={classes.navButtonLeft}
              onClick={() => {
                scrollHandler(0, "left");
              }}
            ></button>
          </div>
        </div>

        {recipesData && <h2>{recipesData[1].name}</h2>}
        <div className={classes.listButton}>
          <div
            className={classes.category}
            ref={(el) => (scrollContainerRef.current[1] = el)}
          >
            {recipesData &&
              recipesData[1].items.map((meal) => (
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
                scrollHandler(1, "right");
              }}
            ></button>
            <button
              className={classes.navButtonLeft}
              onClick={() => {
                scrollHandler(1, "left");
              }}
            ></button>
          </div>
        </div>

        {recipesData && <h2>{recipesData[2].name}</h2>}
        <div className={classes.listButton}>
          <div
            className={classes.category}
            ref={(el) => (scrollContainerRef.current[2] = el)}
          >
            {recipesData &&
              recipesData[2].items.map((meal) => (
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
                scrollHandler(2, "right");
              }}
            ></button>
            <button
              className={classes.navButtonLeft}
              onClick={() => {
                scrollHandler(2, "left");
              }}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}
