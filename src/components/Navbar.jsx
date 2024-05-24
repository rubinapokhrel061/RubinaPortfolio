import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
// import { NavLink } from "react-router-dom";
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
      <div
        data-aos="fade-in"
        className="max-w-screen-2xl  mx-0 dark:shadow-sm dark:shadow-slate-500 shadow-sm  px-4  md:px-20 z-10 bg-[#dbe7e7] dark:bg-[#112240] fixed top-0 left-0 right-0"
      >
        <div className="flex justify-between items-center h-20 ">
          <div className="nav-text text-[#2f9997] ">
            <h1>RP</h1>
          </div>
          {/* desktop navbar */}
          <div className="flex gap-6">
            <div>
              <ul className="hidden md:flex space-x-8 ">
                <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="home"
                    spy={true}
                    offset={-200}
                    smooth={true}
                    duration={500}
                  >
                    HOME
                  </Link>
                </li>
                <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="about"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                  >
                    ABOUT
                  </Link>
                </li>
                <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="timeline"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                  >
                    TIMELINE
                  </Link>
                </li>
                <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="project"
                    spy={true}
                    offset={-100}
                    smooth={true}
                    duration={500}
                  >
                    PROJECT
                  </Link>
                </li>
                <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                  <Link
                    to="contact"
                    spy={true}
                    offset={550}
                    smooth={true}
                    duration={500}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
            <button className="border-[2px]  rounded-md md:hidden border-[#2f9997] text-[#2f9997] ">
              <div
                onClick={() => setMenu(!menu)}
                className="md:hidden text-[#2f9997] "
              >
                {menu ? <IoClose size={24} /> : <IoMenu size={24} />}
              </div>
            </button>
            <button>
              <div
                onClick={handleThemeSwitch}
                className="text-[#2f9997] text-2xl"
              >
                {theme === "dark" ? <MdSunny /> : <IoMoon />}
              </div>
            </button>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="mobile-menu-container bg-[#cad2db] dark:bg-[#100e1e] ">
            <ul className="mobile-menu">
              <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="home"
                  spy={true}
                  offset={-200}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  HOME
                </Link>
              </li>
              <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="about"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  ABOUT
                </Link>
              </li>
              <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="timeline"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  TIMELINE
                </Link>
              </li>
              <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="project"
                  spy={true}
                  offset={-100}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenu(!menu)}
                >
                  PROJECT
                </Link>
              </li>
              <li className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer">
                <Link
                  to="contact"
                  spy={true}
                  offset={650}
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
