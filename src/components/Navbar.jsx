import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Menu from "./Menu";
import Footer from "./Footer";

import logo from "../assets/img/logo.svg";
import words from "../assets/icons/words.svg";
import wordsList from "../assets/icons/wordslist.svg";
import infoIcon from "../assets/icons/info.svg";
import home from "../assets/icons/Home.svg";

const Navbar = () => {
  let activeStyle = {
    opacity: 1,
  };

  return (
    <React.Fragment>
      <header>
        <div className="container">
          <nav className="navbar">
            <NavLink to="/home">
              <span className="navbar-logo">
                <img src={logo} alt="Logo" />
              </span>
            </NavLink>

            <ul className="navbar-links">
              <li className="navbar-links_link">
                <NavLink
                  to="/home"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <img src={home} alt="home-icon" />
                </NavLink>
              </li>
              <li className="navbar-links_link">
                <NavLink
                  to="/words"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <img src={words} alt="words" />
                  <p>Sózler</p>
                </NavLink>
              </li>
              <li className="navbar-links_link">
                <NavLink
                  to="/wordslist"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <img src={wordsList} alt="wordsList" />
                  <p>Sózler Dizimi</p>
                </NavLink>
              </li>
              <li className="navbar-links_link">
                <NavLink
                  to="/about"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <img src={infoIcon} alt="infoIcon" />
                  <p>Baǵdarlama haqqında</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Menu />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};

export default Navbar;
