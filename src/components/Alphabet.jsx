import React from "react";

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

  return (
    <div className="alphabet">
      <div className="alphabet-inner">
        <ul className="alphabet-list">
          {alphabet.map((item, indx) => {
            return (
              <li className="alphabet-list-item" key={indx}>
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
