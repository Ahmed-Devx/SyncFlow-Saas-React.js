import { FiArrowRight, FiZap } from "react-icons/fi";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#step" },
    { name: "Testimonials", href: "#testimonial" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];
  return (
    <header className="text-gray-600 body-font bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 px-4 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
        <a className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0 cursor-pointer" href="#">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <FiZap size={24} />
          </div>
          <span className="ml-3 text-2xl tracking-tight text-indigo-600">
            SyncFlow
          </span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mr-5 hover:text-indigo-600 cursor-pointer transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button className="inline-flex items-center bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded-full text-white mt-4 md:mt-0 shadow-lg shadow-indigo-200 transition-all transform hover:scale-105 active:scale-95 font-semibold">
          Get Started
          <FiArrowRight className="ml-2" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
