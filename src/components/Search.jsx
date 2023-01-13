import React from "react";
import searchIcon from "../assets/icons/search.svg";
import flower from "../assets/img/flower.svg";

export const Search = () => {
  return (
    <div className="search">
      <h1 className="search-title">
        Bir sózdi izleń, onı mángilikke yadlap qalıń.
      </h1>
      <div className="search-content">
        <div className="input">
          <input type="text" placeholder="sózlerdi izlew ushın jazıń" />
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <img src={flower} alt="flower" />
      </div>
    </div>
  );
}

export default Search;
