import { useState } from "react";

import "./App.css";
import Searchbar from "./components/Searchbar";
import CardList from "./components/CardList";

function App() {
  return (
    <>
      <Searchbar />
      <CardList />
    </>
  );
}

export default App;
