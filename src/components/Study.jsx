import React from "react";
import abImg from "../assets/img/ab.svg";
import TopicCard from "./TopicCard";

const Study = () => {
  return (
    <section className="study" style={{ backgroundImage: `url(${abImg})` }}>
      <div className="container">
        <div className="study-cards">
          <div className="study-card">
            <TopicCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Study;
