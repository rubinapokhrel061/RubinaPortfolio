import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

const skills = [
  {
    icon: <FaHtml5 />,
    title: "HTML",
    color: "text-red-600",
  },
  {
    icon: <FaCss3Alt />,
    title: "CSS",
    color: "text-blue-600",
  },
  {
    icon: <IoLogoJavascript />,
    title: "JavaScript",
    color: "text-yellow-500",
  },
  {
    icon: <SiTypescript />,
    title: "TypeScript",
    color: "text-blue-800",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    color: "text-green-600",
  },
  {
    icon: <SiExpress />,
    title: "Express",
    color: "text-gray-500",
  },
  {
    icon: <SiMongodb />,
    title: "MongoDB",
    color: "text-green-800",
  },
  {
    icon: <FaReact />,
    title: "React",
    color: "text-blue-500",
  },
  {
    icon: <SiRedux />,
    title: "Redux",
    color: "text-purple-600",
  },
  {
    icon: <FaGitAlt />,
    title: "Git",
    color: "text-red-500",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    color: "text-gray-500",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen py-20  border border-green-300"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-5xl text-center font-bold text-gray-900 mb-8">
          Skills.
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-8 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 p-4 rounded-xl shadow-lg bg-white transition-transform transform hover:scale-110 hover:shadow-2xl duration-300 ease-in-out"
            >
              <div className={`text-4xl mb-3 ${skill.color}`}>{skill.icon}</div>
              <h3 className="text-base font-semibold text-gray-800 text-center">
                {skill.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
