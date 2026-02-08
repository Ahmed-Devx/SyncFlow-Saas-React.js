import { FiCpu, FiGlobe, FiSmile } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  const featuresData = [
    {
      id: 1,
      title: "AI Powered Insights",
      description:
        "Our advanced algorithms analyze your team's workflow to provide actionable data-driven improvements.",
      icon: <FiCpu />,
    },
    {
      id: 2,
      title: "Global Collaboration",
      description:
        "Connect with your remote team from anywhere in the world with zero latency and high security.",
      icon: <FiGlobe />,
    },
    {
      id: 3,
      title: "User-Friendly Design",
      description:
        "A clean, minimalist interface designed for speed and ease of use, so you can focus on work.",
      icon: <FiSmile />,
    },
  ];

  return (
    <section className="text-gray-600 body-font bg-white px-6 md:px-16 lg:px-24">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-indigo-600 text-sm font-semibold tracking-widest uppercase mb-1">
            Our Core Strengths
          </h2>
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font text-gray-900 mb-4">
            Powerful Features for Modern Teams
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>

        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {featuresData.map((f) => (
            <FeatureCard
              key={f.id}
              title={f.title}
              description={f.description}
              icon={f.icon}
            />
          ))}
        </div>

        <button className="flex mx-auto mt-16 text-white bg-indigo-600 border-0 py-3 px-10 focus:outline-none hover:bg-indigo-700 rounded-full text-lg font-bold shadow-lg transition-all transform hover:scale-105">
          Explore All Features
        </button>
      </div>
    </section>
  );
};

export default Feature;
