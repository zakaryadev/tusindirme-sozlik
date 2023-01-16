import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Words from "../pages/Words";
import WordListPage from "../pages/WordListPage";
import About from "../pages/About";

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/words" element={<Words />} />
          <Route path="/wordslist" element={<WordListPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
