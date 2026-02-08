const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-gray-50 border-t border-gray-200 px-6 md:px-16 lg:px-24">
      <div className="container py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-10 md:mb-0">
            <div className="flex title-font font-bold items-center md:justify-start justify-center text-gray-900 mb-4">
              <div className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-lg flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="ml-3 text-xl tracking-tight">SyncFlow</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Making workflow automation accessible for teams worldwide.
              Streamline your future today.
            </p>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-4 uppercase">
              Product
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <a className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                  Features
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                  Integrations
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                  Pricing
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                  Changelog
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-4 uppercase">
              Company
            </h2>
            <nav className="list-none mb-10 space-y-2">
              <li>
                <a className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                  Careers
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer">
                  Terms of Service
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-gray-900 tracking-widest text-sm mb-4 uppercase">
              Stay Updated
            </h2>
            <div className="flex flex-col">
              <div className="relative mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200"
                />
              </div>
              <button className="text-white bg-indigo-600 border-0 py-2.5 px-6 focus:outline-none hover:bg-indigo-700 rounded-lg font-medium transition-all shadow-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="container py-8 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} SyncFlow — Built with ❤️ for developers
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
            <a className="text-gray-400 hover:text-indigo-600 cursor-pointer transition-colors">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="text-gray-400 hover:text-indigo-600 cursor-pointer transition-colors">
              <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
