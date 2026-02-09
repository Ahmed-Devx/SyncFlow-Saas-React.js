import User1 from "../assets/person-m-3.webp";
import User2 from "../assets/person-m-8.webp";
import User3 from "../assets/person-m-12.webp";

const Testimonial = () => {
  const reviews = [
    {
      name: "HOLDEN CAULFIELD",
      role: "Senior Product Designer",
      text: "SyncFlow has completely transformed how our team manages tasks. The interface is intuitive and the results are 2x faster!",
      img: User1,
    },
    {
      name: "ALPER KAMU",
      role: "UI Developer",
      text: "The best SaaS template I've ever worked with. The components are clean, and the responsiveness is spot on.",
      img: User2,
    },
    {
      name: "HENRY LETHAM",
      role: "CTO",
      text: "Reliable, fast, and beautiful. It's rare to find a tool that balances aesthetics with such powerful functionality.",
      img: User3,
    },
  ];

  return (
    <section
      className="text-gray-600 body-font px-6 md:px-16 lg:px-24"
      id="testimonial"
    >
      <div className="container py-24 mx-auto">
        <h1 className="text-3xl font-bold title-font text-gray-900 mb-12 text-center">
          What Our Clients Say
        </h1>
        <div className="flex flex-wrap -m-4">
          {reviews.map((item, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-indigo-500 bg-gray-100"
                  src={item.img}
                />
                <p className="leading-relaxed text-gray-600">"{item.text}"</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-bold title-font tracking-wider text-sm">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
