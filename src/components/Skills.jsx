import html from "../assets/html.svg";
import css from "../assets/css.svg";
import express from "../assets/express-js.svg";
import javascript from "../assets/javascript.svg";
import mongodb from "../assets/mongodb.svg";
import node from "../assets/nodejs.svg";
import react from "../assets/react.svg";
import redux from "../assets/redux.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import typescript from "../assets/typescript.svg";
import github from "../assets/github.svg";
import git from "../assets/git .svg";

const Skills = () => {
  const skillsItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: javascript,
      name: "Javascript",
    },
    {
      id: 4,
      logo: react,
      name: "react",
    },
    {
      id: 5,
      logo: node,
      name: "node",
    },
    {
      id: 6,
      logo: express,
      name: "express",
    },
    {
      id: 7,
      logo: mongodb,
      name: "mongodb",
    },
    {
      id: 8,
      logo: typescript,
      name: "typescript",
    },
    {
      id: 9,
      logo: redux,
      name: "redux",
    },
    {
      id: 10,
      logo: tailwindcss,
      name: "tailwindcss",
    },
    {
      id: 11,
      logo: github,
      name: "github",
    },
    {
      id: 12,
      logo: git,
      name: "git",
    },
  ];
  return (
    <>
      <div
        name="Skills"
        className="max-w-screen-2xl container mx-auto  px-4 md:px-20 mt-20"
      >
        <div>
          <div className="py-10 flex flex-col ">
            <h1 className="font-semibold text-xl text-center mt-8 text-[#4c8dd7] dark:text-[#64ffda] ">
              My skills
            </h1>
            <div className="mt-16 my-5 md:ml-14 grid grid-cols-3 md:grid-cols-4 gap-14 md:gap-16">
              {skillsItem.map(({ id, logo, name }) => (
                <>
                  <div
                    className="block-container w-16 h-16 hover:scale-110 duration-200 "
                    key={id}
                  >
                    <div className="btn-back rounded-xl " />
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img
                        src={logo}
                        alt={name}
                        className="w-1/2 h-1/2 md:w-2/4 md:h-2/4 object-contain"
                      />
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
};

export default Skills;
