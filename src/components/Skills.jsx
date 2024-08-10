// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaReact,
// } from "react-icons/fa";
// import { SiExpress, SiMongodb, SiRedux, SiTypescript } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io";

// const skills = [
//   {
//     icon: <FaHtml5 />,
//     title: "HTML",
//     description: "Structuring web content with HTML.",
//     color: "text-red-600",
//   },
//   {
//     icon: <FaCss3Alt />,
//     title: "CSS",
//     description: "Styling web pages with CSS, Flexbox, and Grid.",
//     color: "text-blue-600",
//   },
//   {
//     icon: <IoLogoJavascript />,
//     title: "JavaScript",
//     description: "Enhancing web pages with dynamic functionality.",
//     color: "text-yellow-500",
//   },
//   {
//     icon: <SiTypescript />,
//     title: "TypeScript",
//     description: "Adding static types to JavaScript with TypeScript.",
//     color: "text-blue-800",
//   },
//   {
//     icon: <FaNodeJs />,
//     title: "Node.js",
//     description: "Server-side development with Node.js and Express.",
//     color: "text-green-600",
//   },
//   {
//     icon: <SiExpress />,
//     title: "Express",
//     description: "Building RESTful APIs with Express.js.",
//     color: "text-gray-800",
//   },
//   {
//     icon: <SiMongodb />,
//     title: "MongoDB",
//     description: "NoSQL database for storing data in JSON-like format.",
//     color: "text-green-800",
//   },
//   {
//     icon: <FaReact />,
//     title: "React",
//     description: "Building user interfaces with React and Redux.",
//     color: "text-blue-500",
//   },
//   {
//     icon: <SiRedux />,
//     title: "Redux",
//     description: "State management with Redux.",
//     color: "text-purple-600",
//   },
//   {
//     icon: <FaGitAlt />,
//     title: "Git",
//     description: "Version control with Git for tracking changes.",
//     color: "text-red-500",
//   },
//   {
//     icon: <FaGithub />,
//     title: "GitHub",
//     description: "Collaborative development and version control on GitHub.",
//     color: "text-gray-800",
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
//           Skills
//         </h2>
//         <div className="grid  grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="flex flex-col items-center  justify-center w-[142px] h-[142px] md:p-3 md:w-[180px] md:h-[180px] p-2 rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden transition-shadow duration-300 ease-in-out"
//             >
//               <div className={`text-3xl md:text-4xl mb-2 ${skill.color}`}>
//                 {skill.icon}
//               </div>
//               <h3 className="text-sm md:text-base font-semibold mb-1 text-center">
//                 {skill.title}
//               </h3>
//               <p className="text-xs text-wrap md:text-sm  text-gray-600 text-center tracking-tight leading-normal font-light">
//                 {skill.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
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
    <section id="skills" className="py-16 bg-gray-100 dark:bg-[#100e1e]">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl text-center mb-8 md:text-7xl font-bold">
          Skills.
        </h1>
        <div className="grid  grid-cols-2 gap-y-8 md:grid-cols-3 lg:grid-cols-4  justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center  justify-center w-[142px] h-[142px] md:p-3 md:w-[180px] md:h-[180px] p-2 rounded-3xl shadow-lg bg-white dark:bg-[#1a1633] transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden  duration-300 ease-in-out"
            >
              <div className={`text-3xl md:text-4xl mb-2 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-sm md:text-base font-semibold mb-1 text-center">
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
