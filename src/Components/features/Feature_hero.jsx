import React from "react";
import { feature_hero } from "../../assets/images";
import { FaSearch } from "react-icons/fa";
import { AiFillAccountBook, AiFillThunderbolt } from "react-icons/ai";
import { IoPeopleSharp } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
const Feature_hero = () => {
  return (
    <div className="lg:hidden w-full pb-10 lg:pb-0 min-h-160 overflow-hidden bg-black flex flex-col-reverse lg:flex-row items-center">
      {/* content */}
      <div className="text-white  pl-8 lg:pt-20 lg:pl-30 max-wl-xl place-self-start">
        <span className="inline-block text-secondary  py-1 capitalize">
          Features
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tighter py-4">
          Everything you need
          <span className="gradient-text">to build. Together.</span>
        </h1>
        <p className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
         DevSphere provides powerful tools and features that help developers build, collaborate, and ship faster than ever.
        </p>
        <div className="my-5 flex items-center gap-10   px-2 ">
          <div className="flex gap-2 items-center text-gray-300">
            <AiFillThunderbolt className="text-2xl text-secondary"/>
            <span>Fast</span>
          </div>
          <div className="flex gap-2 items-center text-gray-300">
            <IoPeopleSharp className="text-2xl text-secondary"/>
            <span>Collabrative</span>
          </div>
          <div className="flex gap-2 items-center text-gray-300">
            <MdSecurity className="text-2xl text-secondary"/>
            <span>Secure</span>
          </div>
        </div>
      </div>
      {/* image */}
      <img src={feature_hero} className="w-full lg:w-190 " alt="" />
    </div>
  );
};

export default Feature_hero;
