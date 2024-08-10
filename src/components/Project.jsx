import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import Digitalshop from "../assets/digitalshop.jpg";
import filesharing from "../assets/fileshare.jpg";
import Lms from "../assets/LMS.png";
const projects = [
  {
    title: "Digital Shop",

    technologies: "React.Express.Node.js.MongoDB",
    imageSrc: Digitalshop,

    links: {
      live: "https://digitalshop-five.vercel.app/",
      github: "https://github.com/rubinapokhrel061/EcommerceWebJsFrontend",
    },
  },
  {
    title: "File Sharing",

    technologies: "React.Express.Node.js.MongoDB",
    imageSrc: filesharing,

    links: {
      live: "https://file-sharing-clientside.vercel.app/",
      github: "https://github.com/rubinapokhrel061/File_sharing_clientside",
    },
  },
  {
    title: "Book Store",

    technologies: "React.Express.Node.js.MongoDB",
    imageSrc: Lms,

    links: {
      live: "https://lms-clientside.vercel.app/",
      github: "https://github.com/rubinapokhrel061/LMS_clientside",
    },
  },
];

const Project = () => {
  return (
    <div
      id="project"
      className="w-full py-20 min-h-screen mb-5 dark:bg-[#1a1633]"
    >
      <div className="w-[80%] mx-auto mb-12">
        <span className="text-base md:text-lg uppercase">My Work</span>
        <h1 className="text-6xl md:text-7xl font-bold">Projects.</h1>
        <p className="text-justify text-base md:text-lg mt-5 rounded-lg tracking-tight leading-relaxed font-light">
          Each project provides links to GitHub repositories and live demos,
          highlighting my expertise with various technologies and demonstrating
          my ability to tackle challenges and manage projects effectively.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-[80%] mx-auto gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded overflow-hidden hover:shadow-xl shadow-lg dark:bg-[#100e1e] flex flex-col"
          >
            <div className="relative">
              <img
                className="w-full"
                src={project.imageSrc}
                alt={project.title}
              />
              <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
              <div className="text-3xl text-white absolute top-0 right-0 px-4 py-2 mt-2  mr-3">
                <div className="flex gap-3">
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LuExternalLink className="hover:text-blue-800" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="hover:text-blue-800" />
                  </a>
                </div>
              </div>
            </div>
            <div className="px-3 sm:px-6 pt-4 mb-auto">
              <h2 className="font-medium text-lg hover:text-indigo-600 transition duration-500 ease-in-out inline-block ">
                {project.title}
              </h2>
            </div>
            <div className="px-3 sm:px-6 py-2  mb-4 text-gray-500">
              <div className="border border-gray-300 text-[12px] px-3 inline-block py-1 rounded-3xl">
                {project.technologies}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
