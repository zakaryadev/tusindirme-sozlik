import StatisticBadge from "../../components/admin/components/StatisticBadge";
import RecentAddedWords from "../../components/admin/components/RecentAddedWords";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Folders</h2>
        <div className="statistic">
          <StatisticBadge type="categories" text="Kategoriyalar" count={5} />
          <StatisticBadge type="lang" text="Sózler" count={28005} />
        </div>
      </div>
      <RecentAddedWords />
    </div>
  );
};

export default Dashboard;
