import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
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
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 z-10 bg-[#112240]  shadow-md fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center h-20 ">
          <div className="nav-text">
            <h1>RP</h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8 ">
              {navItems.map(({ id, text, path }) => (
                <li
                  className="hover:text-[#64ffda] hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <NavLink to={path}>{text}</NavLink>
                </li>
              ))}
            </ul>
            <button className="border-[2px]  rounded-md md:hidden border-[#64ffda]">
              <div
                onClick={() => setMenu(!menu)}
                className="md:hidden text-[#64ffda]"
              >
                {menu ? <IoClose size={24} /> : <IoMenu size={24} />}
              </div>
            </button>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="mobile-menu-container">
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

            <ul className="mobile-menu ">
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
