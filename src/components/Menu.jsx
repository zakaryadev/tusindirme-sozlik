import React from "react";
import bg from "../assets/img/main.svg";
import Search from "./Search";
import Wave from "./Wave";

const Menu = () => {
  return (
    <section
      className="main"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div className="container">
        <div className="main-content">
          <Search />
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Menu;
