import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Words from "../pages/Words";
import WordList from "../pages/WordsList";
import WordListItem from "../pages/WordListItem";
import About from "../pages/About";
import Dashboard from "../pages/AdminPage/Dashboard";
import AdminWords from "../pages/AdminPage/AdminWords";
import AdminLayout from "../components/admin/AdminLayout";
import Categories from "../pages/AdminPage/Categories";
import SignIn from "../pages/AdminPage/SignIn";

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
        <Route path="signin" element={<SignIn />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to={"dashboard"} />}></Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="words" element={<AdminWords />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Root;
