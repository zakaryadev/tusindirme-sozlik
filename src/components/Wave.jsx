import React from "react";
import bg from "../assets/img/wave.svg";

export const Wave = () => {
  return (
    <div className="wave">
      <div className="button-group">
        <button className="btn btn-blue">
          O’rganish uchun <strong>lug’at</strong>
        </button>
        <button className="btn btn-green">
          <strong>So’zlarni o’rganishning</strong> eng samarali usuli
        </button>
      </div>
      <img src={bg} alt="bg" />
    </div>
  );
};

export default Wave;
