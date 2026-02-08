const StatCard = ({ icon, value, label }) => {
  return (
    <div className="p-4 md:w-1/4 sm:w-1/2 w-full   ">
      <div className="border-2 border-gray-100 px-4 py-6 rounded-xl hover:shadow-lg hover:border-indigo-200 transition-all duration-300">
        <div className="text-indigo-600 w-12 h-12 mb-3 inline-block">
          {icon}
        </div>
        <h2 className="title-font font-bold text-3xl text-gray-900">{value}</h2>
        <p className="leading-relaxed text-gray-500 font-medium">{label}</p>
      </div>
    </div>
  );
};
export default StatCard;
