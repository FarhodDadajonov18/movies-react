import React, { useState } from "react";

function Search({ searchMovies }) {
  const [search, setSearch] = useState("panda");
  const [type, setType] = useState("all");

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          id="email_inline"
          type="search"
          placeholder="Search"
          autoComplete="off"
          className="validate"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button className="btn" onClick={() => searchMovies(search, type)}>
          Search
        </button>
      </div>

      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            checked={type === "all"}
            onChange={handleFilter}
          />
          <span>All</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            checked={type === "movie"}
            onChange={handleFilter}
          />
          <span>Movies only</span>
        </label>

        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            checked={type === "series"}
            onChange={handleFilter}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
}

export default Search;
