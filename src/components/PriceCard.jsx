const PriceCard = ({ plan, price, features, isPopular }) => {
  return (
    <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
      <div
        className={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden ${isPopular ? "border-indigo-500 shadow-xl" : "border-gray-200"}`}
      >
        {isPopular && (
          <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
            POPULAR
          </span>
        )}
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium uppercase">
          {plan}
        </h2>
        <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
          <span>{price === "Free" ? "Free" : `$${price}`}</span>
          {price !== "Free" && (
            <span className="text-lg ml-1 font-normal text-gray-500">/mo</span>
          )}
        </h1>

        {features.map((feat, index) => (
          <p key={index} className="flex items-center text-gray-600 mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-indigo-500 text-white rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </span>
            {feat}
          </p>
        ))}

        <button
          className={`flex items-center mt-auto text-white border-0 py-2 px-4 w-full focus:outline-none rounded transition-colors ${isPopular ? "bg-indigo-500 hover:bg-indigo-600" : "bg-gray-400 hover:bg-gray-500"}`}
        >
          Get Started
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default PriceCard;
