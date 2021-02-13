import React from "react";

const Search = (props) => {
  return (
    <div>
      <div className="column is-4 is-offset-4">
        <input
          className="input is-normal is-rounded"
          type="text"
          placeholder="Filter by name"
          name="search"
          value={props.value}
          onChange={props.handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
