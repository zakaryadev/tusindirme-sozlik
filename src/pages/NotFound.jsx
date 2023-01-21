import React from "react";
import { useNavigate } from "react-router-dom";
import photo from "../assets/img/404.png";

const NotFound = () => {
  const nav = useNavigate();
  return (
    <div className="container">
      <div className="notfound">
        <div>
          <img src={photo} alt="404" />
        </div>
        <h1>Hesh nárse tabılmadı</h1>
        <button onClick={() => nav("/words")}>Artqa</button>
      </div>
    </div>
  );
};

export default NotFound;
