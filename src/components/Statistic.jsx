import { FiDownload, FiUsers, FiFileText, FiShield } from "react-icons/fi";
import StatCard from "./StatisticCard";

const Statistics = () => {
  const statsData = [
    {
      id: 1,
      label: "Downloads",
      value: "2.7K",
      icon: <FiDownload size={40} />,
    },
    {
      id: 2,
      label: "Active Users",
      value: "1.3K",
      icon: <FiUsers size={40} />,
    },
    {
      id: 3,
      label: "Files Synced",
      value: "74M",
      icon: <FiFileText size={40} />,
    },
    {
      id: 4,
      label: "Data Secured",
      value: "100%",
      icon: <FiShield size={40} />,
    },
  ];

  return (
    <section className="text-gray-600 body-font bg-white px-6 md:px-16 lg:px-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-x text-indigo-600 tracking-widest font-medium title-font mb-1 uppercase">
            Our Growth
          </h2>
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            Trusted by Thousands of Teams Worldwide
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            SyncFlow is helping startups and enterprises scale their
            productivity with real-time insights and secure infrastructure.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 text-center">
          {statsData.map((stat) => (
            <StatCard
              key={stat.id}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
