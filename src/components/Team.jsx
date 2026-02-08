import TeamCard from "./TeamCard";
import Person1 from "../assets/person-f-5.webp";
import Person2 from "../assets/person-f-9.webp";
import Person3 from "../assets/person-m-7.webp";
import Person4 from "../assets/person-m-8.webp";

const Team = () => {
  const teamMembers = [
    {
      name: "Alper Kamu",
      role: "Full Stack Developer",
      desc: "Expert in React and Node.js with over 5 years of experience.",
      img: Person3,
    },
    {
      name: "Sarah Jenkins",
      role: "UI/UX Designer",
      desc: "Passionate about creating beautiful, user-centric digital interfaces.",
      img: Person2,
    },
    {
      name: "Atticus Finch",
      role: "Product Manager",
      desc: "Strategic thinker focused on delivering high-quality products.",
      img: Person4,
    },
    {
      name: "Emma Wilson",
      role: "Marketing Head",
      desc: "Driving growth through data-driven marketing and creative campaigns.",
      img: Person1,
    },
  ];

  return (
    <section className="text-gray-600 body-font px-6 md:px-16 lg:px-24 bg-white">
      <div className="container py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-bold title-font mb-4 text-gray-900 tracking-tight">
            MEET OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Our team consists of industry experts dedicated to building the
            future of digital solutions.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
