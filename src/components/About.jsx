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

const About = () => {
  //bg-[#dbe7e7]
  return (
    <>
      <div id="about" className="w-full md:h-screen pt-8 md:mb-96">
        <div
          name="About"
          className="max-w-screen-2xl container mx-auto mb-6  px-4 md:px-20 pt-5 mt-20  w-full h-1/2"
        >
          <div className="rounded-md  bg-[#dbe7e7] dark:bg-[#112240]   p-5 ">
            <br />
            <div className="text-center">
              <h1 className="font-semibold text-xl  text-[#2f9997] inline border-b-2 border-gray-400  ">
                ABOUT ME
              </h1>
            </div>

            <div className="text-justify text-[14px] mt-5 rounded-[.6rem] tracking-[.1px] leading-[1.7]  relative font-[200] ">
              Hi there! 👋 I'm Rubina, a passionate MERN stack developer based
              in Nepal. I love building web applications that are both
              functional and visually appealing. I am a beginner developer
              looking for opportunities to expand my skills. I have knowledge of
              Mern stack technologies and I am committed to improving my
              proficiency in these technologies.
              <br />
              <br />
              If you are looking for a motivated and dedicated full-stack
              developer, I am available for work opportunities and excited to
              contribute to project that allow me to expand my experience and
              knowledge
            </div>
          </div>
          <br />
          <div name="skills" className="w-full   relative ">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto pl-4 flex flex-col justify-center w-full ">
              <div className="text-center">
                <p className="text-xl text-[#2f9997] font-bold inline border-b-2 border-gray-400 ">
                  Skills
                </p>
                <p className="py-4 text-left">
                  These are the technologies I've learn.
                </p>
              </div>

              <div className="w-full grid grid-cols-2 sm:grid-cols-4  text-center ">
                <div className="  hover:scale-110  sm:bg-[#dbe7e7] dark:sm:bg-transparent duration-500">
                  <img
                    className="w-14 mt-7 mx-auto"
                    src={html}
                    alt="HTML icon"
                  />
                  <p className="my-4">HTML</p>
                </div>
                <div className="  hover:scale-110 bg-[#dbe7e7]  dark:bg-[#112240] sm:bg-transparent   duration-500">
                  <img className="w-14 mt-7 mx-auto" src={css} alt="css icon" />
                  <p className="my-4">CSS</p>
                </div>
                <div className=" hover:scale-110 bg-[#dbe7e7] dark:bg-[#112240] dark:sm:bg-transparent duration-500">
                  <img
                    className="w-14 mt-7 mx-auto"
                    src={javascript}
                    alt="javascript icon"
                  />
                  <p className="my-4">JAVASCRIPT</p>
                </div>
                <div className=" hover:scale-110 dark:sm:bg-[#112240] duration-500">
                  <img
                    className="w-[58px]  mt-5 mx-auto"
                    src={react}
                    alt="react icon"
                  />
                  <p className="my-4">REACT</p>
                </div>
                <div className="  hover:scale-110 dark:sm:bg-[#112240]   duration-500">
                  <img
                    className="w-14 mt-7 mx-auto "
                    src={redux}
                    alt="redux icon"
                  />
                  <p className="my-4">REDUX</p>
                </div>
                <div className="  hover:scale-110 bg-[#dbe7e7] dark:bg-[#112240] dark:sm:bg-transparent duration-500 ">
                  <img
                    className="w-14 mt-7 mx-auto   dark:bg-[#dbe7e7] dark:rounded-full"
                    src={github}
                    alt="github icon"
                  />
                  <p className="my-4">GITHUB</p>
                </div>
                <div className=" hover:scale-110 bg-[#dbe7e7] sm:bg-transparent dark:bg-[#112240] md:bg-transparent   duration-500">
                  <img
                    className="w-14 mt-7 mx-auto"
                    src={node}
                    alt="nodejs icon"
                  />
                  <p className="my-4">NODE JS</p>
                </div>
                <div className="  hover:scale-110   sm:bg-[#dbe7e7] dark:sm:bg-transparent duration-500">
                  <img
                    className="w-14 mt-7 mx-auto"
                    src={mongodb}
                    alt="mongodb icon"
                  />
                  <p className="my-4">MONGO DB</p>
                </div>
                <div className=" hover:scale-110   sm:bg-[#dbe7e7] dark:sm:bg-transparent  duration-500">
                  <img
                    className="w-14 mt-7 mx-auto "
                    src={tailwindcss}
                    alt="Tailwind icon"
                  />
                  <p className="my-4 mt-8">TAILWIND</p>
                </div>
                <div className="  hover:scale-110 bg-[#dbe7e7] sm:bg-transparent dark:bg-[#112240] dark:md:bg-transprant md:bg-transparent duration-500">
                  <img
                    className="w-14 mt-6  mx-auto"
                    src={express}
                    alt="Express icon"
                  />
                  <p className="my-4">EXPRESS</p>
                </div>

                <div className=" hover:scale-110 bg-[#dbe7e7] dark:bg-[#112240]  dark:sm:bg-transparent duration-500">
                  <img
                    className="w-14 mt-7 mx-auto"
                    src={typescript}
                    alt="HTML icon"
                  />
                  <p className="my-4">TYPESCRIPT</p>
                </div>
              </div>
            </div>
          </div>

          <br />
        </div>
      </div>
      <br />
    </>
  );
};

export default About;
