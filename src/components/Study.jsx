import React from "react";
import abImg from "../assets/img/ab.svg";
import Badge from "./Badge";

const Study = () => {
  return (
    <section className="study" style={{ backgroundImage: `url(${abImg})` }}>
      <div className="container">
        <div className="study-cards">
          <div className="study-card">
            <Badge p={"10px 35px"} />
          </div>
          <div className="study-card"></div>
        </div>
      </div>
    </section>
  );
};

export default Study;
