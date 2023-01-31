import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Alphabet = () => {
  const alphabet = [
    "A",
    "Á",
    "B",
    "C",
    "Ch",
    "D",
    "E",
    "F",
    "G",
    "Ǵ",
    "H",
    "I",
    "Í",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ń",
    "O",
    "Ó",
    "P",
    "Q",
    "R",
    "S",
    "Sh",
    "T",
    "U",
    "Ú",
    "V",
    "W",
    "X",
    "R",
    "Y",
    "Z",
    "#",
  ];
  const navigate = useNavigate();
  return (
    <div className="alphabet">
      <div className="alphabet-inner">
        <ul className="alphabet-list">
          {alphabet.map((item, indx) => {
            return (
              <li
                className="alphabet-list-item"
                key={indx}
                onClick={() =>
                  navigate(`/wordslist?letter=${item.toLowerCase()}`)
                }
              >
                {item} {item.toLowerCase()}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Alphabet;
