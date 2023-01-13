import React from "react";
import logo from "../assets/img/logo.svg";
import searchIcon from "../assets/icons/search.svg";
import listIcon from "../assets/icons/list.svg";
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
                  <img src={searchIcon} alt="searchIcon" />
                  Sózler
                </Link>
              </li>
              <li className="navbar-links_link">
                <Link to="/wordslist">
                  <img src={listIcon} alt="listIcon" />
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
