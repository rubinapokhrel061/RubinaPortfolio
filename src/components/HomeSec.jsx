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
      <div id="home" className="w-full h-screen">
        <div className="max-w-screen-2xl flex container mx-auto mt-52 px-4 md:px-20 md:my-52 my-28  w-full h-full">
          <div className="flex flex-col md:flex-row md:justify-center">
            <div className=" mt-12 md:mt-24 space-y-2 order-2 md:order-1">
              <span className="text-[14px] md:text-xl">
                Hello👋, It's Me
                <h3 className="text-[18px] font-bold md:text-3xl text-[#2f9997]">
                  Rubina Pokhrel
                </h3>
              </span>
              <div className="flex space-x-1 text-sm md:text-xl">
                <h1>And, I'm a</h1>

                <ReactTyped
                  className="text-[#2f9997]  font-bold"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}
                />
              </div>
              <br />

              <p className="text-justify text-[14px] mt-5 md:text-[1.1rem] rounded-[.6rem] tracking-[.1px] leading-[1.7]  relative font-[200]">
                I am a Computer Science Student. I am interested in full-stack
                web development and also doing competitive programming.
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
                      <a
                        href="https://www.facebook.com/ru.beenaa.35"
                        target="_blank"
                      >
                        <FaFacebookF className="text-xl text-[#2f9997]   md:text-3xl hover:scale-110 duration-200   cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/rubina-pokhrel-a85094275"
                        target="_blank"
                      >
                        <FaLinkedinIn className="text-xl text-[#2f9997]  md:text-3xl hover:scale-110 duration-200   cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/rubina__pokhrel/?igsh=eXJqbmttbWoyeWxj"
                        target="_blank"
                      >
                        <FaInstagram className="text-xl text-[#2f9997]  font-extrabold md:text-3xl hover:scale-110 duration-200   cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/rubinapokhrel061"
                        target="_blank "
                      >
                        <FaGithub className="text-xl  text-[#2f9997]  md:text-3xl hover:scale-110 duration-200   cursor-pointer" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className=" space-y-2">
                  <h1 className="text-sm md:text-lg text-center">
                    Currently working on
                  </h1>
                  <div className="flex space-x-5">
                    <DiMongodb className="text-xl  text-[#2f9997] md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                    <SiExpress className="text-xl  text-[#2f9997]  md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                    <IoLogoReact className="text-xl  text-[#2f9997]  md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                    <FaNodeJs className="text-xl t  text-[#2f9997]  md:text-3xl hover:scale-110 duration-200 rounded-full  cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default HomeSec;
