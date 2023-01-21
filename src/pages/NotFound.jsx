import React from "react";
import photo from "../assets/img/404.png";

const NotFound = () => {
  return (
    <div className="notfound">
      <img src={photo} alt="404" />
      <h1>Hesh nárse tabılmadı</h1>
    </div>
  );
};

export default NotFound;
