import React from "react";

const SearchBar = (props) => {
  return (
    <input
      type="text"
      placeholder="Enter Search Keyword"
      onChange={(e) => props.onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
