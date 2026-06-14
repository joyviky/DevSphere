import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { std_hero } from "../../assets/images";

const Std_EditHero = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="outer">
      <div className="res">
        <button onClick={() => navigate(`/students/${id}`)}className="flex gap-3 items-center cursor-pointer hover:text-primary duration-200">
          <BsArrowLeft /> Back to profile
        </button>
        <div className="text-white  pt-5  max-wl-xl flex flex-col-reverse md:flex-row md:justify-between items-start">
          {/* content */}
          <div className="md:pt-25">
            <h1 className="text-5xl md:text-6xl capitalize font-bold leading-tighter py-4">
             Edit your profile
             
            </h1>
            <p className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
              update your information and showcase your skills to the developer community
            </p>
          </div>
         
          {/* img */}
          <img src={std_hero} className="w-ful lg:w-[60%]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Std_EditHero;
