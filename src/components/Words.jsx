import React from "react";
import Pagination from "./Pagination";
import bg from "../assets/img/ab.svg";

const Words = () => {
  const list = [];
  let newArr = [
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
    "Suspense;",
  ];

  return (
    <section className="words" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="words-title">Sózler dizimi</div>
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

export default Words;
