import React from "react";
import photo from "../assets/img/404.png";

const NotFound = () => {
  return (
    <div className="notfound">
      <div>
        <img src={photo} alt="404" />
      </div>
      <h1>Hesh nárse tabılmadı</h1>
    </div>
  );
};

export default NotFound;
