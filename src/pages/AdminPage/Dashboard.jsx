import StatisticBadge from "../../components/admin/components/StatisticBadge";
import RecentAddedWords from "../../components/admin/components/RecentAddedWords";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Folders</h2>
      <div className="statistic">
        <StatisticBadge type="categories" text="Kategoriyalar" count={28} />
        <StatisticBadge type="lang" text="Sózler" count={28} />
      </div>
      <RecentAddedWords />
    </div>
  );
};

export default Dashboard;
