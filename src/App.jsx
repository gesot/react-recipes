import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import CardList from "./components/CardList";
import FetchRecipe from "./components/FetchRecipe";

function App() {
  const [fetchedData, setFetchedData] = useState(null);

  const handleFetchedData = (data) => {
    setFetchedData(data);
  };
  //console.log(fetchedData);
  return (
    <>
      {fetchedData === null && <FetchRecipe onDataFetch={handleFetchedData} />}
      <Searchbar />
      <CardList recipesData={fetchedData} />
    </>
  );
}

export default App;
