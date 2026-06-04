import React from "react";
import { globe } from "../../assets/images";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const StudentHero = () => {
  return (
    <div className="w-full pb-10 lg:pb-0 min-h-160 overflow-hidden bg-black flex flex-col-reverse lg:flex-row items-center">
      {/* content */}
      <div className="text-white pl-8 pt-20 lg:pl-30 max-wl-xl place-self-start">
        <span className="inline-block text-primary bg-border  px-5 py-1 rounded-sm">
          ⚜️ Community
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tighter py-4">
          Student Directory{" "}
          <span className="gradient-text">Connect.Collabrate.Grow.</span>
        </h1>
        <p className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
         Discover talented developers,explore their projects, and build meaningful connections.
        </p>
        <div className="my-5 flex items-center gap-2 cursor-pointer bg-[#0f0f25] max-w-110 px-2 rounded-sm">
          <FaSearch/>
          <input type="text" name="" className="w-full border-0 outline-0 max-w-100 py-2" id="" placeholder="Search by name, skills, college, or projects..."/>
        </div>
      </div>
      {/* image */}
      <img src={globe} className="w-full lg:w-190" alt="" />
    </div>
  );
};

export default StudentHero;
