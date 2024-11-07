import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import Digitalshop from "../assets/digitalshop.jpg";
import filesharing from "../assets/fileshare.jpg";
import Lms from "../assets/LMS.png";

const projects = [
  {
    title: "Digital Shop",
    technologies: "React, Express, Node.js, MongoDB",
    imageSrc: Digitalshop,
    links: {
      live: "https://digitalshop-five.vercel.app/",
      github: "https://github.com/rubinapokhrel061/EcommerceWebJsFrontend",
    },
  },
  {
    title: "File Sharing",
    technologies: "React, Express, Node.js, MongoDB",
    imageSrc: filesharing,
    links: {
      live: "https://file-sharing-clientside.vercel.app/",
      github: "https://github.com/rubinapokhrel061/File_sharing_clientside",
    },
  },
  {
    title: "Book Store",
    technologies: "React, Express, Node.js, MongoDB",
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
      className="w-full py-20 min-h-screen border border-green-300"
    >
      <div className="w-[90%] mx-auto mb-12 text-center">
        <span className="text-base md:text-lg uppercase text-indigo-600">
          My Work
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Projects
        </h1>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed font-light mb-8">
          Here are some of the projects I've worked on. Check them out live or
          visit the GitHub repositories to explore the code.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-[90%] mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col rounded-lg bg-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="relative">
              <img
                src={project.imageSrc}
                alt={project.title}
                className="w-full  object-contain transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30"></div>
            </div>

            <div className="p-6 flex flex-col justify-between flex-grow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                {project.technologies}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-all duration-300"
                >
                  <LuExternalLink className="text-2xl" />
                </a>
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 hover:text-gray-600 transition-all duration-300"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
