import React from "react";

const SearchResult = (props) => {
  return (
    <p className="searchResult">
      Your search query is:<span>{props.query}</span>
    </p>
  );
};

export default SearchResult;
