import { FiArrowRight } from "react-icons/fi";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center group border-2 border-gray-100">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="flex-grow">
        <h2 className="text-gray-900 text-xl title-font font-bold mb-3">
          {title}
        </h2>
        <p className="leading-relaxed text-base text-gray-600">{description}</p>
        <a className="mt-3 text-indigo-500 inline-flex items-center cursor-pointer font-semibold hover:text-indigo-700">
          Learn More <FiArrowRight className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
