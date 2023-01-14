import React from "react";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
import mainBg from "../assets/img/main.svg";
import wave from "../assets/img/wave.svg";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <section className="main" style={{ backgroundImage: `url(${mainBg})` }}>
      <div className="container">
        <div className="main-content">
          <Search />
        </div>
      </div>
      <div className="wave" style={{ backgroundImage: `url(${wave})` }}>
        <div className="button-group">
          <button onClick={() => navigate("/words")} className="btn">
            Úyreniw ushın <strong>sózlik</strong>
          </button>
          <button onClick={() => navigate("/about")} className="btn">
            <strong>Sózlerdi úyreniwdiń</strong> eń ónimdarlı usılı
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
