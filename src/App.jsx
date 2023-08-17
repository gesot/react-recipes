import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import CardList from "./components/CardList";
import FetchRecipe from "./components/FetchRecipe";

function App() {
  return (
    <>
      <Searchbar />
      <CardList />
      <FetchRecipe />
    </>
  );
}

export default App;
