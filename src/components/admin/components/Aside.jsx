import logo from "../../../assets/img/logo.svg";
import dashboard from "../../../assets/icons/dashboard.svg";
import lang from "../../../assets/icons/lang.svg";
import category from "../../../assets/icons/categories.svg";
import { NavLink } from "react-router-dom";

const Aside = () => {
  let activeStyle = {
    background: "#282A2C",
    borderRadius: "12px",
  };
  return (
    <aside className="aside">
      <div className="aside-inner">
        <NavLink to="/admin" className="logo">
          <img src={logo} alt="Logo" />
          <p>Túsindirme sózlik</p>
        </NavLink>
        <ul className="aside-tabs">
          <NavLink
            to="dashboard"
            className="aside-tabs-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <img src={dashboard} alt="dashboard" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink
            to="words"
            className="aside-tabs-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <img src={lang} alt="lang" />
            <p>Sózler</p>
          </NavLink>
          <NavLink
            to="categories"
            className="aside-tabs-item"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <img src={category} alt="category" />
            <p>Kategoriyalar</p>
          </NavLink>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
