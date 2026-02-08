const TeamCard = ({ name, role, desc, img }) => (
  <div className="p-4 lg:w-1/4 md:w-1/2 ">
    <div className="h-full flex flex-col items-center text-center ">
      <img
        alt={name}
        className="flex-shrink-0 rounded-lg w-full h-70 object-cover object-center mb-4 shadow-md"
        src={img}
      />
      <div className="w-full">
        <h2 className="title-font font-bold text-lg text-gray-900">{name}</h2>
        <h3 className="text-indigo-500 mb-3 text-sm font-medium uppercase tracking-widest">
          {role}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600">{desc}</p>
        <span className="inline-flex space-x-3">
          <a className="text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="text-gray-400 hover:text-indigo-500 cursor-pointer transition-colors">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </div>
);
export default TeamCard;
