import classes from "./CardList.module.css";
import Card from "./Card";

export default function CardList({}) {
  // const categories = [{ name: "Seafood", items: ["item1", "item2", "item3"] }]; this is how the data should be
  return (
    <div className={classes.container}>
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
