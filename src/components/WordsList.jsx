import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";
import bg from "../assets/img/ab.svg";

const WordsList = () => {
  let newArr = [
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
    "Suspense",
  ];
  return (
    <section className="words" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="card-category">
          <div className="category">
            <ul className="category-list">
              <li className="category-item active">Atlıq</li>
              <li className="category-item">Pısıqlawısh</li>
              <li className="category-item">Sanlıq</li>
              <li className="category-item">Feyil</li>
              <li className="category-item">Ráwish</li>
            </ul>
          </div>
          <Card />
        </div>
        <div className="words-title">Uqsas sózler</div>
        <div className="words-list">
          <ul className="words-list_item">
            {newArr.map((item, indx) => {
              return <li key={indx}>{item}</li>;
            })}
          </ul>
          <Pagination />
        </div>
      </div>
    </section>
  );
};

export default WordsList;
