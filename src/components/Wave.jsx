import React from "react";
import bg from "../assets/img/wave.svg";

export const Wave = () => {
  return (
    <div className="wave">
      <div className="button-group">
        <button className="btn">
          Úyreniw ushın <strong>sózlik</strong>
        </button>
        <button className="btn">
          <strong>Sózlerdi úyreniwdiń</strong> eń ónimdarlı usılı
        </button>
      </div>
      <img src={bg} alt="bg" />
    </div>
  );
};

export default Wave;
