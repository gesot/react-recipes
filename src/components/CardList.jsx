import classes from "./CardList.module.css";
import Card from "./Card";

export default function CardList({ recipesData }) {
  // const categories = [{ name: "Seafood", items: ["item1", "item2", "item3"] }]; this is how the data should be
  if (recipesData) console.log(recipesData[0].items);
  return (
    <>
      {recipesData && <h2>{recipesData[0].name}</h2>}
      <div className={classes.wrapper}>
        <div className={classes.category}>
          <div className={classes.buttonContainer}>
            <button className={classes.navButton}></button>
          </div>
          {recipesData &&
            recipesData[0].items.map((meal) => (
              <Card
                key={meal.idMeal}
                cardTitle={meal.strMeal}
                cardImg={meal.strMealThumb}
              />
            ))}
        </div>

        {recipesData && <h2>{recipesData[1].name}</h2>}
        <div className={classes.category}>
          <div className={classes.buttonContainer}>
            <button className={classes.navButton}></button>
          </div>
          {recipesData &&
            recipesData[1].items.map((meal) => (
              <Card
                key={meal.idMeal}
                cardTitle={meal.strMeal}
                cardImg={meal.strMealThumb}
              />
            ))}
        </div>

        {recipesData && <h2>{recipesData[2].name}</h2>}
        <div className={classes.category}>
          <div className={classes.buttonContainer}>
            <button className={classes.navButton}></button>
          </div>
          {recipesData &&
            recipesData[2].items.map((meal) => (
              <Card
                key={meal.idMeal}
                cardTitle={meal.strMeal}
                cardImg={meal.strMealThumb}
              />
            ))}
        </div>
      </div>
    </>
  );
}
