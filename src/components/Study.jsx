import React from "react";
import abImg from "../assets/img/ab.svg";
import Badge from "./Badge";
import TopicCard from "./TopicCard";

const Study = () => {
  return (
    <section className="study" style={{ backgroundImage: `url(${abImg})` }}>
      <div className="container">
        <div className="study-cards">
          <div className="study-card">
            <Badge
              t={"Úyreniw ushın álipbe"}
              p={"10px 35px"}
              tt={"uppercase"}
            />
          </div>
          <div className="study-card">
            <TopicCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
