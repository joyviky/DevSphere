import React from "react";
import { blog_hero, gallery_img } from "../../assets/images";
import { FaImages, FaSearch } from "react-icons/fa";
import {motion} from "framer-motion"
const containerVariants={
  initial:{},
  animate:{
    transition:{
    staggerChildren:0.20
  }
  },
  
}
const fadeBlurUp={
  initial:{
    opacity:0,
    y:20,
    filter:"blur(5px)"
  },
  animate:{
    opacity:1,
    y:0,
    filter:"blur(0px)",
    transition:{duration:0.5,ease:"easeOut"}
  },
  
}
const Gallery_Hero = () => {
  return (
    <motion.div variants={containerVariants} initial="initial" whileInView="animate"   viewport={{ once: true, amount: 0.2 }} className="w-full pb-10 lg:pb-0 min-h-150 overflow-hidden bg-black flex flex-col-reverse lg:flex-row items-center">
      {/* content */}
      <div className="text-white  pl-8 lg:pt-20 lg:pl-30 max-wl-xl place-self-start">
        <motion.span variants={fadeBlurUp} className=" text-secondary  py-1 capitalize flex gap-2 items-center ">
         <FaImages/> Moments that inspire
        </motion.span>
        <motion.h1 variants={fadeBlurUp} className="text-4xl md:text-5xl  font-bold leading-tighter py-4">
         Gallery of <span className="text-secondary">Moments</span> <br />
         Achievements <span className="text-primary">& Memories</span>
        </motion.h1>
        <motion.p variants={fadeBlurUp} className="text-text-secondary max-w-md  text-md  md:max-w-lg ">Capturing the journey of developers, evnet, hackthons, workshops, and unforgettable achievements.</motion.p>
      </div>
      {/* image */}
      <motion.img initial={{scale:0.3}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true,amount:0.2}} src={gallery_img} className="w-full lg:w-190 lg:h-100 object-contain" alt="" />
    </motion.div>
  );
};

export default Gallery_Hero;
