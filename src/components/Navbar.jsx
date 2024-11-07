import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <div className="max-w-screen-2xl mx-0 shadow-lg px-4 md:px-20 z-10  bg-[#28A745]   fixed top-0 left-0 right-0">
        <div className="flex justify-between md:justify-around items-center h-20">
          <div className="nav-text text-[#FFA500]">
            <h1>RP</h1>
          </div>

          <div className="flex text-black gap-6">
            <div>
              <ul className="hidden md:flex space-x-8 text-lg">
                <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="home"
                    spy={true}
                    offset={-80}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="about"
                    spy={true}
                    offset={-80}
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="skills"
                    spy={true}
                    offset={-80}
                    smooth={true}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="project"
                    spy={true}
                    offset={-80}
                    smooth={true}
                    duration={500}
                  >
                    Project
                  </Link>
                </li>
                <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="contact"
                    spy={true}
                    offset={-20}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <button className=" rounded-md md:hidden border-[3px] border-yellow-500 text-yellow-500">
              <div
                onClick={() => setMenu(!menu)}
                className="md:hidden text-yellow-500"
              >
                {menu ? <IoClose size={32} /> : <IoMenu size={32} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div className="mobile-menu-container  bg-[#238e3c]">
            <ul className="mobile-menu text-black">
              <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="home"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  HOME
                </Link>
              </li>
              <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="about"
                  spy={true}
                  offset={-80}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  ABOUT
                </Link>
              </li>
              <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="skills"
                  spy={true}
                  offset={-80}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  SKILLS
                </Link>
              </li>
              <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="project"
                  spy={true}
                  offset={-80}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  PROJECT
                </Link>
              </li>
              <li className=" hover:text-[#FFA500] hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  offset={-80}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
