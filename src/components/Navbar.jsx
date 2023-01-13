import React from "react";
import logo from "../assets/img/logo.svg";
import words from "../assets/icons/words.svg";
import wordsList from "../assets/icons/wordslist.svg";
import infoIcon from "../assets/icons/info.svg";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Navbar() {
  return (
    <React.Fragment>
      <header>
        <div className="container">
          <nav className="navbar">
            <Link to="/home">
              <span className="navbar-logo">
                <img src={logo} alt="Logo" />
              </span>
            </Link>

            <ul className="navbar-links">
              <li className="navbar-links_link">
                <Link to="/words">
                  <img src={words} alt="words" />
                  Sózler
                </Link>
              </li>
              <li className="navbar-links_link">
                <Link to="/wordslist">
                  <img src={wordsList} alt="wordsList" />
                  Sózler Dizimi
                </Link>
              </li>
              <li className="navbar-links_link">
                <Link to="/about">
                  <img src={infoIcon} alt="infoIcon" />
                  Baǵdarlama haqqında
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default Navbar;