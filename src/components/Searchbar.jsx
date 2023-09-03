import React, { useState } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import searchBoxStyles from "./Searchbar.module.css";

function SearchBox({ onMealSearch }) {
  const inputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const expandSearchBar = () => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };
  const handleTyped = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    console.log(query);
    onMealSearch(query);
  };

  return (
    <div className={searchBoxStyles["search-box"]}>
      <button
        className={searchBoxStyles["btn-search"]}
        onClick={expandSearchBar}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <input
        ref={inputRef}
        type="text"
        className={searchBoxStyles["input-search"]}
        value={searchQuery}
        onChange={handleTyped}
        placeholder="Type to Search..."
      />
    </div>
  );
}

export default SearchBox;
