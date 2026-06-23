import React from "react";
import { globe } from "../../assets/images";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import {motion} from 'framer-motion'

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

const StudentHero = () => {
  return (
    <motion.div variants={containerVariants} initial="initial" whileInView="animate"   viewport={{ once: true, amount: 0.2 }} className="w-full pb-10 lg:pb-0 min-h-160 overflow-hidden bg-black flex flex-col-reverse lg:flex-row items-center">
      {/* content */}
      <div className="text-white pl-8 pt-20 lg:pl-30 max-wl-xl place-self-start">
        <motion.span variants={fadeBlurUp} className="inline-block text-primary bg-border  px-5 py-1 rounded-sm">
          ⚜️ Community
        </motion.span>
        <motion.h1 variants={fadeBlurUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tighter py-4">
          Student Directory{" "}
          <span className="gradient-text">Connect.Collabrate.Grow.</span>
        </motion.h1>
        <motion.p variants={fadeBlurUp} className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
         Discover talented developers,explore their projects, and build meaningful connections.
        </motion.p>
        <motion.div variants={fadeBlurUp} className="my-5 flex items-center gap-2 cursor-pointer bg-[#0f0f25] max-w-110 px-2 rounded-sm">
          <FaSearch/>
          <input type="text" name="" className="w-full border-0 outline-0 max-w-100 py-2" id="" placeholder="Search by name, skills, college, or projects..."/>
        </motion.div>
      </div>
      {/* image */}
      <motion.img initial={{scale:0.3}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true,amount:0.2}}  src={globe} className="w-full lg:w-190" alt="" />
    </motion.div>
  );
};

export default StudentHero;
