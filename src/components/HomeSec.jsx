import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { ReactTyped } from "react-typed";

const HomeSec = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto mt-52 px-4 md:px-20 md:my-52 my-28 h-3/6"
      >
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className=" mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-base md:text-xl">
              Hello👋, It's Me
              <h3 className="text-[20px] font-bold md:text-3xl text-[#64ffda]">
                Rubina Pokhrel
              </h3>
            </span>

            <div className="flex space-x-1 text-sm md:text-xl">
              <h1>And, I'm a</h1>

              <ReactTyped
                className="text-[#64ffda] font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-base md:text-lg text-justify">
              {/* Passisonate Full Stack Developer with a knack for crafting robust
              and scalable web application . */}
              I am a Computer Science Student. I am interested in full-stack web
              development and also doing competative programming.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className=" text-center  text-sm md:text-lg">
                  Available on
                </h1>
                <ul className="flex space-x-5  ">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebookF className="text-xl text-[#64ffda]  md:text-3xl hover:scale-110 duration-200   cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <FaLinkedinIn className="text-xl text-[#64ffda] md:text-3xl hover:scale-110 duration-200   cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank">
                      <FaInstagram className="text-xl text-[#64ffda] font-extrabold md:text-3xl hover:scale-110 duration-200   cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank ">
                      <FaGithub className="text-xl  text-[#64ffda] md:text-3xl hover:scale-110 duration-200   cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="text-sm md:text-lg text-center">
                  Currently working on
                </h1>
                <div className="flex space-x-5">
                  <DiMongodb className="text-xl  text-[#64ffda] md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                  <SiExpress className="text-xl  text-[#64ffda] md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                  <IoLogoReact className="text-xl  text-[#64ffda] md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                  <FaNodeJs className="text-xl t  text-[#64ffda] md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <hr />
    </>
  );
};

export default HomeSec;
