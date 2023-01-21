import StatisticBadge from "../../components/admin/components/StatisticBadge";
import RecentAddedWords from "../../components/admin/components/RecentAddedWords";
import CategoriesList from "../../components/admin/components/Categories";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Folders</h2>
        <div className="statistic">
          <NavLink to="/admin/categories">
            <StatisticBadge type="categories" text="Kategoriyalar" count={5} />
          </NavLink>
          <NavLink to="/admin/words">
            <StatisticBadge type="lang" text="Sózler" count={28005} />
          </NavLink>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="dashboard-content">
          <RecentAddedWords />
          <CategoriesList />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
