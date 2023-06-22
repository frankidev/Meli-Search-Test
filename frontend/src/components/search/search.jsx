import React from "react";
import "./search.scss";
import { Link } from "react-router-dom";

const Search = (props) => {
  const { setSearch } = props;

  return (
    <div className="search-bar">
      <div className="search-input-div">
        <div className="search-logo">
          <Link to="/">
            <img src="../../Assets/Logo_ML.png" alt="logo" />
          </Link>
        </div>
        <input
          type="text"
          className="input-search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Nunca dejes de buscar..."
        />
        <button className="search-button">
          <img src="../../Assets/ic_Search.png" alt="logo" />
        </button>
      </div>
    </div>
  );
};

export default Search;
