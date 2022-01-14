import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(event) => handleSearch(event.target.value)}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
