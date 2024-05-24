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
  // const [openMenu, setOpenMenu] = useState(false);
  // const toggleMenu = () => {
  //   setMenu(!menu);
  // };
  const navItems = [
    {
      id: 1,
      text: "HOME",
      path: "/",
    },
    {
      id: 2,
      text: "ABOUT",
      path: "/about",
    },
    {
      id: 3,
      text: "TIMELINE",
      path: "/timeline",
    },
    {
      id: 4,
      text: "PROJECT",
      path: "/project",
    },
    {
      id: 5,
      text: "CONTACT",
      path: "/contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl  mx-0 dark:shadow-sm dark:shadow-slate-500 shadow-sm  px-4  md:px-20 z-10 bg-[#dbe7e7] dark:bg-[#112240] fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center h-20 ">
          <div className="nav-text text-[#2f9997] ">
            <h1>RP</h1>
          </div>
          {/* desktop navbar */}
          <div className="flex gap-6">
            <div>
              <ul className="hidden md:flex space-x-8 ">
                {navItems.map(({ id, text, path }) => (
                  <li
                    className=" hover:text-[#2f9997]  hover:scale-105 duration-200 cursor-pointer"
                    key={id}
                  >
                    <Link
                      to={path}
                      spy={true}
                      offset={50}
                      smooth={true}
                      duration={500}
                    >
                      {text}
                    </Link>
                  </li>
                ))}
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
          <div className="mobile-menu-container bg-[#dfe5ec] dark:bg-[#100e1e] ">
            {/* <ul className="md:hidde bg-slate-400 text-black h-[700px] w-[300px] flex flex-col  items-center justify-center space-y-5 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className=" hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {text}
                </li>
              ))}
            </ul> */}

            <ul className="mobile-menu  ">
              {navItems.map(({ id, text, path }) => (
                <li className="" key={id}>
                  <Link
                    to={path}
                    onClick={() => setMenu(!menu)}
                    smooth={true}
                    duration={500}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
