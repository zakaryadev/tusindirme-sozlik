import React from "react";
import left from "../assets/icons/left.svg";
import right from "../assets/icons/right.svg";

const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <button className="pagination-btn left">
          <img src={left} alt="left" />
        </button>
        <ul className="pagination-list">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
        <button className="pagination-btn right">
          <img src={right} alt="right" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
