import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";

function SearchBar({ onChange }) {
  return (
    <div className="searchBar__wrapper">
      <FontAwesomeIcon className="nav__icon" icon={faSearch} />
      <input
        className="searchBar__input"
        type="text"
        placeholder="Search for a country..."
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;
