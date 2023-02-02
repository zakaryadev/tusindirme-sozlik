import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import bg from "../assets/img/ab.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const WordsList = () => {
  const navigate = useNavigate();

  const req = window.location.search;

  const [data, setData] = React.useState([]);
  const categories = [
    "Atlıq",
    "Sanlıq",
    "Kelbetlik",
    "Ráwish",
    "Feyil",
    "Almasıq",
  ];
  React.useEffect(() => {
    axios
      .get(`http://abbc.uz/api/words${req}`)
      .then((res) => setData(res?.data?.data));
  }, [req]);

  return (
    <section className="words" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="card-category">
          <div className="category">
            <ul className="category-list">
              {categories.map((item, indx) => {
                console.log();
                return (
                  <li
                    key={indx}
                    className={`category-item ${
                      data[0]?.categories[0]?.latin === item ? `active` : ""
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
          <Card />
        </div>
        <div className="words-title">Uqsas sózler</div>
        <div className="words-list">
          <ul className="words-list_item">
            {data.map((item, indx) => {
              return <li key={indx}>{item.latin}</li>;
            })}
          </ul>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default WordsList;
