import React from "react";
import Word from "../components/Words";
import PopularReq from "../components/PopularReq";

export const WordsList = () => {
  return (
    <React.Fragment>
      <Word />
      <PopularReq />
    </React.Fragment>
  );
};

export default WordsList;
