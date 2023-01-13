import React from "react";
import bg from "../assets/img/main.svg";
import Search from "../components/Search";

function Home() {
  return (
    <section className="main">
      <div className="container">
        <div className="main-content">
          <Search />
        </div>
      </div>
      <img src={bg} alt="main" className="main-bg" />
    </section>
  );
}

export default Home;
