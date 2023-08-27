import CardList from "./CardList";
import classes from "./CardMap.module.css";

export default function CardMap({ rData }) {
  return (
    <div className={classes.wrapper}>
      <CardList recipesData={rData} idx={0} />
      <CardList recipesData={rData} idx={1} />
      <CardList recipesData={rData} idx={2} />
      <CardList recipesData={rData} idx={3} />
    </div>
  );
}
