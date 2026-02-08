import { FiArrowRight, FiPlayCircle } from "react-icons/fi";
import HeroBg from "../assets/Hero-bg.jpg";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-white to-indigo-50/30 px-4  md:px-10 lg:px-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <div className="inline-flex items-center bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-indigo-100 animate-pulse">
            Version 2.0 is now live!
          </div>
          <h1 className="title-font sm:text-6xl text-4xl mb-6 font-extrabold text-gray-900 leading-tight">
            Manage Your Team <br className="hidden lg:inline-block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Without the Chaos
            </span>
          </h1>

          <p className="mb-8 leading-relaxed text-lg text-gray-600 max-w-lg">
            SyncFlow brings all your tasks, teammates, and tools together. Stop
            juggling between apps and start delivering results 2x faster.
          </p>

          <div className="flex justify-center gap-4">
            <button className="inline-flex items-center text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded-full text-lg font-semibold shadow-lg shadow-indigo-200 transition-all">
              Start Building <FiArrowRight className="ml-2" />
            </button>
            <button className="inline-flex items-center text-gray-700 bg-white border border-gray-200 py-3 px-8 focus:outline-none hover:bg-gray-50 rounded-full text-lg font-semibold transition-all">
              <FiPlayCircle className="mr-2 text-indigo-600" /> Watch Demo
            </button>
          </div>
        </div>

        <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 shadow-1xl">
          <img
            className="object-cover object-center rounded-2xl shadow-2xl transition-transform hover:scale-105 duration-500"
            alt="SaaS Dashboard Preview"
            src={HeroBg}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
