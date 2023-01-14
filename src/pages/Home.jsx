import React from "react";
import Study from "../components/Study";
import abImg from "../assets/img/ab.svg";

const Home = () => {
  return (
    <section className="home" style={{ backgroundImage: `url(${abImg})` }}>
      <div className="container">
        <Study />
      </div>
    </section>
  );
};

export default Home;
