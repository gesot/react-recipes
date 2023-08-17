import React from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import searchBoxStyles from "./Searchbar.module.css";

function SearchBox() {
  const inputRef = useRef(null);
  const expandSearchBar = () => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
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
        placeholder="Type to Search..."
      />
    </div>
  );
}

export default SearchBox;
