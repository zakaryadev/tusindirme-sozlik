import logo from "../../assets/img/logo.svg";
import dashboard from "../../assets/icons/dashboard.svg";
import lang from "../../assets/icons/lang.svg";
import category from "../../assets/icons/categories.svg";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside className="aside">
      <Link className="logo">
        <img src={logo} alt="Logo" />
        <p>Túsindirme sózlik</p>
      </Link>
      <ul className="aside-tabs">
        <li className="aside-tabs-item active">
          <img src={dashboard} alt="dashboard" />
          <p>Dashboard</p>
        </li>
        <li className="aside-tabs-item">
          <img src={lang} alt="lang" />
          <p>Sózler</p>
        </li>
        <li className="aside-tabs-item">
          <img src={category} alt="category" />
          <p>Kategoriyalar</p>
        </li>
      </ul>
    </aside>
  );
};

export default Aside;
