import classes from "./CardList.module.css";
import Card from "./Card";
import { useRef } from "react";

export default function CardList({ recipesData }) {
  const scrollContainerRef = useRef(null);
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 600, // You can adjust the scrolling distance
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={classes.wrapper}>
        {recipesData && <h2>{recipesData[0].name}</h2>}
        <div className={classes.listButton}>
          <div className={classes.category} ref={scrollContainerRef}>
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
              onClick={scrollRight}
            ></button>
          </div>
        </div>

        {recipesData && <h2>{recipesData[1].name}</h2>}
        <div className={classes.listButton}>
          <div className={classes.category} ref={scrollContainerRef}>
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
              onClick={scrollRight}
            ></button>
          </div>
        </div>

        {recipesData && <h2>{recipesData[1].name}</h2>}
        <div className={classes.listButton}>
          <div className={classes.category} ref={scrollContainerRef}>
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
              onClick={scrollRight}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
}
