import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { MdSunny } from "react-icons/md";
import { IoMoon } from "react-icons/io5";

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
      text: "Home",
      path: "/",
    },
    {
      id: 2,
      text: "About",
      path: "/about",
    },
    {
      id: 3,
      text: "Skills",
      path: "/skills",
    },
    {
      id: 4,
      text: "Project",
      path: "/project",
    },
    {
      id: 5,
      text: "Contact",
      path: "/contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl  mx-0 container px-4  md:px-20 z-10 bg-[#d4dae1] dark:bg-[#112240] fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center h-20 ">
          <div className="nav-text text-[#4c8dd7] dark:text-[#64ffda]">
            <h1>RP</h1>
          </div>
          {/* desktop navbar */}
          <div className="flex gap-6">
            <div>
              <ul className="hidden md:flex space-x-8 ">
                {navItems.map(({ id, text, path }) => (
                  <li
                    className=" hover:text-[#4c8dd7] dark:hover:text-[#64ffda] hover:scale-105 duration-200 cursor-pointer"
                    key={id}
                  >
                    <NavLink to={path}>{text}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <button className="border-[2px]  rounded-md md:hidden border-[#4c8dd7] dark:border-[#64ffda]">
              <div
                onClick={() => setMenu(!menu)}
                className="md:hidden text-[#4c8dd7] dark:text-[#64ffda]"
              >
                {menu ? <IoClose size={24} /> : <IoMenu size={24} />}
              </div>
            </button>
            <button>
              <div
                onClick={handleThemeSwitch}
                className="hover:text-[#4c8dd7] dark:hover:text-[#64ffda]  text-2xl"
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
                  <NavLink to={path} onClick={() => setMenu(!menu)}>
                    {text}
                  </NavLink>
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
