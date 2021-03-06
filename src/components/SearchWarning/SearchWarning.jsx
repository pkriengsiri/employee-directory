import React from "react";

const SearchWarning = () => {
  return (
    <article className="container message is-hidden mt-3">
      <div className="message-header">
        <p>No results found!</p>
        {/* <button className="delete" aria-label="delete"></button> */}
      </div>
      <div className="message-body">
        Please refine your search!
      </div>
    </article>
  );
};

export default SearchWarning;
