import React from "react";
import { heroImg } from "../../assets/images";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import {animate, motion, scale} from "framer-motion"


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
const Hero = () => {
  return (
    <motion.div variants={containerVariants} initial="initial" whileInView="animate"   viewport={{ once: true, amount: 0.2 }} className="w-full pb-10 lg:pb-0 min-h-160 bg-black flex flex-col-reverse lg:flex-row">
      {/* content */}
    <div  className="text-white pl-8 pt-20 lg:pl-30 max-wl-xl">
        <motion.span variants={fadeBlurUp}  className="inline-block bg-border text-text-secondary px-5 py-1 rounded-sm"> ⚜️ All-in-One Platfrom for Developers</motion.span>
        <motion.h1 variants={fadeBlurUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tighter py-4">
          Show Case. <br /> Connect. <br /> <span className="gradient-text">Grow.</span>
        </motion.h1>
        <motion.p variants={fadeBlurUp} className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
          DevSphere AI helps students build their developer identity, showcase
          projects, write blogs, and connect with opportunities.
        </motion.p>
        <motion.div variants={fadeBlurUp} className="flex justify-start -ml-2 mt-3">
          <Link to={"/contact"}>
            < Button 
              name="Explore Students"
              icon={<FaArrowRight />}
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
        </motion.div>
      </div>
      {/* image */}
      <motion.img initial={{scale:0.3}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true,amount:0.2}} src={heroImg} className="w-full lg:w-[60%]" alt="" />
    </motion.div>
  );
};

export default Hero;
