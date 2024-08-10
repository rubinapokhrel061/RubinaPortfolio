import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { Link } from "react-scroll";
const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <div className="max-w-screen-2xl  mx-0 dark:shadow-sm dark:shadow-slate-500 shadow-lg  px-4  md:px-20 z-10  dark:bg-[#1a1633] fixed top-0 left-0 right-0 bg-gray-100 animate-fadeIn">
        <div className="flex justify-between md:justify-around items-center h-20 ">
          <div className="nav-text text-yellow-500 ">
            <h1>RP</h1>
          </div>

          <div className="flex gap-6">
            <div>
              <ul className="hidden md:flex  space-x-8 text-lg ">
                <li className="hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="home"
                    spy={true}
                    offset={-50}
                    smooth={true}
                    duration={500}
                  >
                    Home
                  </Link>
                </li>
                <li className=" hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="about"
                    spy={true}
                    offset={-50}
                    smooth={true}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className=" hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="skills"
                    spy={true}
                    offset={-50}
                    smooth={true}
                    duration={500}
                  >
                    Skills
                  </Link>
                </li>
                <li className=" hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="project"
                    spy={true}
                    offset={-50}
                    smooth={true}
                    duration={500}
                  >
                    Project
                  </Link>
                </li>
                <li className=" hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="contact"
                    spy={true}
                    offset={-50}
                    smooth={true}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <button className="border-[2px]  rounded-md md:hidden border-yellow-500 text-yellow-500 ">
              <div
                onClick={() => setMenu(!menu)}
                className="md:hidden text-yellow-500 "
              >
                {menu ? <IoClose size={28} /> : <IoMenu size={28} />}
              </div>
            </button>
            <button>
              <div
                onClick={handleThemeSwitch}
                className="text-yellow-500 text-3xl"
              >
                {theme === "dark" ? <MdSunny /> : <IoMoon />}
              </div>
            </button>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="mobile-menu-container bg-yellow-50 dark:bg-[#100e1e] ">
            <ul className="mobile-menu">
              <li className=" hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="home"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  HOME
                </Link>
              </li>
              <li className=" hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="about"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  ABOUT
                </Link>
              </li>
              <li className=" hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="skills"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  SKILLS
                </Link>
              </li>
              <li className=" hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="project"
                  spy={true}
                  offset={-50}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  PROJECT
                </Link>
              </li>
              <li className=" hover:text-yellow-500  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  offset={-150}
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
