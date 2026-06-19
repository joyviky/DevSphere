import React from "react";
import { blog_hero, gallery_img } from "../../assets/images";
import { FaImages, FaSearch } from "react-icons/fa";


const Gallery_Hero = () => {
  return (
    <div className="w-full pb-10 lg:pb-0 min-h-150 overflow-hidden bg-black flex flex-col-reverse lg:flex-row items-center">
      {/* content */}
      <div className="text-white  pl-8 lg:pt-20 lg:pl-30 max-wl-xl place-self-start">
        <span className=" text-secondary  py-1 capitalize flex gap-2 items-center ">
         <FaImages/> Moments that inspire
        </span>
        <h1 className="text-4xl md:text-5xl  font-bold leading-tighter py-4">
         Gallery of <span className="text-secondary">Moments</span> <br />
         Achievements <span className="text-primary">& Memories</span>
        </h1>
        <p className="text-text-secondary max-w-md  text-md  md:max-w-lg ">Capturing the journey of developers, evnet, hackthons, workshops, and unforgettable achievements.</p>
      </div>
      {/* image */}
      <img src={gallery_img} className="w-full lg:w-190 lg:h-100 object-contain" alt="" />
    </div>
  );
};

export default Gallery_Hero;
