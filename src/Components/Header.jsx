import React, { useState } from "react";
import { logo } from "../assets/images";
import { Link, NavLink } from "react-router-dom";
import Button from "./buttons/Button";
import { FaBars, FaPhone } from "react-icons/fa";
import { RiBloggerLine, RiContactsLine, RiGalleryFill, RiHomeHeartLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import { TfiThemifyFavicon } from "react-icons/tfi";
import { FaInfoCircle } from "react-icons/fa";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { GiCondorEmblem } from "react-icons/gi";

const navLinks = [
  {
    id: 1,
    path: "/",
    name: "Home",
    icon:<RiHomeHeartLine/>
  },
  {
    id: 4,
    path: "/students",
    name: "Students",
    icon:<PiStudentBold/>
  },
  {
    id: 5,
    path: "/blogs",
    name: "Blogs",
    icon:<RiBloggerLine/>
  },
  {
    id: 6,
    path: "/gallery",
    name: "Gallery",
    icon:<RiGalleryFill/>
  },
  {
    id: 7,
    path: "/features",
    name: "Features",
    icon:<TfiThemifyFavicon/>
  },
  {
    id: 8,
    path: "/about",
    name: "About",
    icon:<GiCondorEmblem/>
  },
  {
    id: 9,
    path: "/contact",
    name: "Contact",
    icon:<RiContactsLine/>
    
  },
];

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <header className="relative border-b border-border bg-black  w-full text-white">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center gap-30">
        <img src={logo} className="w-60 " alt="" />
        {/* menubar */}
        <FaBars
          onClick={() => setIsShow(!isShow)}
          className="lg:hidden size-6 cursor-pointer mr-4"
        />
        {/* lap links */}
        <div className="hidden lg:flex justify-between items-center">
          {navLinks.map((link) => (
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "text-primary-hover" : ""} hover:text-primary-hover  transition duration-200 capitalize cursor-pointer ml-2`
              }
              key={link.id}
              to={link.path}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to={"/login"}>
            <Button
              name="Login"
              style={"text-white bg-transparent border-2 border-border"}
            />
          </Link>
          <Link to={"/register"}>
            <Button
              name="Register"
              style={"text-black bg-primary border border-primary-hover"}
            />
          </Link>
        </div>
        {/* mobile links */}
        {isShow && (
          <div className="fixed p-2 border-r-1 z-1001 bg-black border-border w-80 left-0 h-full top-0">
            <div>
              <img src={logo} className="w-50 " alt="" />
              <div className="flex flex-col justify-between items-center">
                {navLinks.map((link) => (
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? "text-primary   bg-primary/20" : ""} flex hover:pl-5 hover:text-primary-hover justify-start items-center gap-2  hover:bg-primary/20 my-1 p-2 w-full rounded-sm mr-2 transition-all duration-200 capitalize cursor-pointer ml-2`
                    }
                    key={link.id}
                    to={link.path}
                  >
                    <span className="text-2xl">{link.icon}</span>
                    {link.name}
                  </NavLink>
                ))}
                <NavLink className={({ isActive }) =>
                      `${isActive ? "text-primary  bg-primary/20" : ""} hover:text-primary-hover flex hover:pl-5 justify-start items-center gap-2 hover:bg-primary/20 my-1 p-2 w-full rounded-sm mr-2 transition-all duration-200 capitalize cursor-pointer ml-2`
                    } to={"/login"}><span className="text-2xl"><LuLogIn/></span>Login</NavLink>
                <NavLink className={({ isActive }) =>
                      `${isActive ? "text-primary  bg-primary/20" : ""} hover:text-primary-hover hover:pl-5  flex justify-start items-center gap-2 hover:bg-primary/20 my-1 p-2 w-full rounded-sm mr-2 transition-all duration-200-all capitalize cursor-pointer ml-2`
                    } to={"/register"}><span className="text-2xl"><LuLogOut/></span>Register</NavLink>
                  
              </div>
            </div>
          </div>
        )}
        {isShow && (
          <div
            onClick={() => setIsShow(!isShow)}
            className="fixed z-1000 inset-0 w-full h-full bg-black/55"
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
