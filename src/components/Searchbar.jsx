import classes from "./Searchbar.module.css";
import { Helmet } from "react-helmet";

export default function () {
  return (
    <>
      <div className={classes.container}>
        <input className={classes.bar} type="text" name="bar" />
        <button className={classes.button}>
          <span className={classes.materialSymbol}>search</span>
        </button>
      </div>
    </>
  );
}
