import React from "react";
import bg from "../assets/img/second.svg";
import Alphabet from "./Alphabet";

const PopularReq = () => {
  return (
    <section
      className="popular-requests"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <h2 className="popular-title">Ataqlı izlewler</h2>
        <p>Qoraqalpaq tili sózligi</p>
        <div className="popular-inner">
          <div className="popular-item">
            <ul>
              <li>Augue</li>
              <li>Augue</li>
              <li>Augue</li>
              <li>Augue</li>
            </ul>
            <ul>
              <li>Augue</li>
              <li>Augue</li>
              <li>Augue</li>
              <li>Augue</li>
            </ul>
            <ul>
              <li>Augue</li>
              <li>Augue</li>
              <li>Augue</li>
              <li>Augue</li>
            </ul>
          </div>
          <div className="popular-item">
            <Alphabet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularReq;
