import React from "react";
import { laptop } from "../../assets/images";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="w-full min-h-160 bg-[#010210] flex flex-col-reverse lg:flex-row">
      {/* content */}
      <div className=" text-white  pl-8 pt-20 lg:pl-30 max-wl-xl">
        <p className="uppercase lg:pt-10  font-semibold text-primary ">
          Ready to get started?
        </p>
        <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold leading-tighter py-4">
          Your developer Journey <br />
          <span className="gradient-text">Starts Here</span>
        </h1>
        <p className="text-text-secondary text-md pr-5 sm:pr-0 md:text-lg max-w-lg ">
         Join DeveSphere AI today and tad take the step towards building your developer identity
        </p>
        <div className="flex justify-start -ml-2 mt-3">
          <Link to={"/contact"}>
            <Button
              name="Create Account"
              icon={<FaArrowRight />}
              style={
                "text-black flex items-center gap-3 bg-primary border transform hover:-translate-y-1 transition duration-200 border-primary-hover"
              }
            />
          </Link>
          <Link to={"/students"}>
            <Button
              name="Explore Platfrom"
              style={
                "text-white bg-transparent border-2 border-border  transform hover:-translate-y-1 transition duration-200"
              }
            />
          </Link>
        </div>
      </div>
      {/* image */}
      <img src={laptop} className="w-full lg:w-[55%] object-contain" alt="" />
    </div>
  );
};

export default Banner;
