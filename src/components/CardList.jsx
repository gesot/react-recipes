import classes from "./CardList.module.css";
import Card from "./Card";

export default function CardList({ recipesData }) {
  // const categories = [{ name: "Seafood", items: ["item1", "item2", "item3"] }]; this is how the data should be
  if (recipesData) console.log(recipesData[0].items);
  return (
    <div className={classes.container}>
      {recipesData &&
        recipesData[0].items.map((meal) => (
          <Card
            key={meal.idMeal}
            cardTitle={meal.strMeal}
            cardImg={meal.strMealThumb}
          />
        ))}
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />

      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
