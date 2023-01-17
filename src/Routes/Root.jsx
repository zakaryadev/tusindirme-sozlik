import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Words from "../pages/Words";
import WordList from "../pages/WordsList";
import WordListItem from "../pages/WordListItem";
import About from "../pages/About";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Navigate to={"/words"} />} />
          <Route path="/words" element={<Words />} />
          <Route path="/wordslist" element={<WordList />} />
          <Route path="/wordslist/item" element={<WordListItem />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
