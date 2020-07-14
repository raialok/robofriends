import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue ma3"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
