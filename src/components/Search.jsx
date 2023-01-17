import React from "react";
import searchIcon from "../assets/icons/search.svg";
import flower from "../assets/img/flower.svg";
import filter from "../assets/icons/filter.svg";
import random from "../assets/icons/random.svg";

const Search = () => {
  const [popup, setPopup] = React.useState(false);
  const [res, setRes] = React.useState([]);
  const [value, setValue] = React.useState("");
  const data = [
    "Sózlik",
    "Sózliktin",
    "Sózlikler",
    "Awdarma",
    "Qollanba",
    "Sabaqlıq",
    "Kompyuter",
    "Sozler",
  ];
  const popActive = () => {
    setPopup(!popup);
  };
  React.useEffect(() => {
    const getData = setTimeout(() => {
      if (value) {
        // console.log(reqZ);
        const dat = data.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setRes(dat);
      } else {
        setRes([]);
      }
    }, 500);
    return () => clearTimeout(getData);
  }, [value]);

  return (
    <div className="search">
      <h1 className="search-title">
        Bir sózdi izleń, onı mángilikke yadlap qalıń.
      </h1>
      <div className="search-content">
        <div className="input">
          <input
            type="text"
            placeholder="sózlerdi izlew ushın jazıń"
            onChange={(event) => setValue(event.target.value)}
          />
          <img src={searchIcon} alt="searchIcon" />
        </div>
        <ul className="req-list">
          {res?.length > 0 &&
            res?.map((item, indx) => {
              return (
                <li className="req-list-item" key={indx}>
                  {indx + 1} {item}
                </li>
              );
            })}
        </ul>
        <div className="btn-group">
          <button className="btn btn-search" onClick={popActive}>
            <img src={filter} alt="filter" />
            <p>Filter</p>
          </button>
          <button className="btn btn-search">
            <img src={random} alt="filter" />
            <p>Alfavit</p>
          </button>
        </div>
        <div className={`popup ${popup ? "show" : "hide"}`}>
          <ul>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
        </div>

        <img src={flower} alt="flower" />
      </div>
    </div>
  );
};

export default Search;
