import React from "react";
import { heroImg } from "../../assets/images";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  return (
    <div className="w-full pb-10 lg:pb-0 min-h-160 bg-black flex flex-col-reverse lg:flex-row">
      {/* content */}
      <div className="text-white pl-8 pt-20 lg:pl-30 max-wl-xl">
        <span className="inline-block bg-border text-text-secondary px-5 py-1 rounded-sm"> ⚜️ All-in-One Platfrom for Developers</span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tighter py-4">
          Show Case. <br /> Connect. <br /> <span className="gradient-text">Grow.</span>
        </h1>
        <p className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
          DevSphere AI helps students build their developer identity, showcase
          projects, write blogs, and connect with opportunities.
        </p>
        <div className="flex justify-start -ml-2 mt-3">
          <Link to={"/contact"}>
            <Button
              name="Explore Students"
              icon={<FaArrowRightLong />}
              style={
                "text-black flex items-center gap-3 bg-primary border transform hover:-translate-y-1 transition duration-200 border-primary-hover"
              }
            />
          </Link>
          <Link to={"/students"}>
            <Button
              name="Learn More"
              style={
                "text-white bg-transparent border-2 border-border  transform hover:-translate-y-1 transition duration-200"
              }
            />
          </Link>
        </div>
      </div>
      {/* image */}
      <img src={heroImg} className="w-full lg:w-[60%]" alt="" />
    </div>
  );
};

export default Hero;
