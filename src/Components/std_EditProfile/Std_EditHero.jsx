import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import { std_hero } from "../../assets/images";
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

const Std_EditHero = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <motion.div variants={containerVariants} initial="initial" whileInView="animate"   viewport={{ once: true, amount: 0.2 }}  className="outer">
      <div className="res">
        <button onClick={() => navigate(`/students/${id}`)}className="flex gap-3 items-center cursor-pointer hover:text-primary duration-200">
          <BsArrowLeft /> Back to profile
        </button>
        <div className="text-white  pt-5  max-wl-xl flex flex-col-reverse md:flex-row md:justify-between items-start">
          {/* content */}
          <div className="md:pt-25">
            <motion.h1 variants={fadeBlurUp}  className="text-5xl md:text-6xl capitalize font-bold leading-tighter py-4">
             Edit your profile
             
            </motion.h1>
            <motion.p variants={fadeBlurUp}  className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
              update your information and showcase your skills to the developer community
            </motion.p>
          </div>
         
          {/* img */}
          <motion.img initial={{scale:0.3}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true,amount:0.2}} src={std_hero} className="w-ful lg:w-[60%]" alt="" />
        </div>
      </div>
    </motion.div>
  );
};

export default Std_EditHero;
