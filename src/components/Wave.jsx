import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/img/wave.svg";

export const Wave = () => {
  const navigate = useNavigate();

  return (
    <div className="wave">
      <div className="button-group">
        <button onClick={() => navigate("/words")} className="btn">
          Úyreniw ushın <strong>sózlik</strong>
        </button>
        <button onClick={() => navigate("/about")} className="btn">
          <strong>Sózlerdi úyreniwdiń</strong> eń ónimdarlı usılı
        </button>
      </div>
      <img src={bg} alt="bg" />
    </div>
  );
};
