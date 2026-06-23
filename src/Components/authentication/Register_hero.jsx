import React from 'react'
import { robo_paiyan } from "../../assets/images";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import {logo} from "../../assets/images"
import { FaArrowLeftLong } from 'react-icons/fa6';
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

const Register_hero = () => {
  return (
   <motion.div variants={containerVariants} initial="initial" whileInView="animate"   viewport={{ once: true, amount: 0.2 }}  className='bg-black'>
    {/* small heder */}
      <div className='flex justify-between text-white px-5 max-w-7xl mx-auto'>
        <img src={logo} alt="" className='w-50'/>
        <Link to={"/"} className='flex items-center gap-3 hover:gap-4 duration-300'>
         <FaArrowLeftLong className='text-secondary'/>  
           Back to Home 
        </Link>
      </div>
     <div className="w-full pb-10 lg:pb-0 min-h-160 bg-black flex flex-col-reverse lg:flex-row bg-black ">
      {/* content */}
      <div className="text-white pl-8 pt-20 lg:pl-30 max-wl-xl">
        <motion.span variants={fadeBlurUp}  className="inline-block bg-border text-text-secondary px-5 py-1 rounded-sm">🦋 Welcome to Devsphere AI</motion.span>
        <motion.h1 variants={fadeBlurUp}  className="text-5xl md:text-6xl  font-bold leading-tighter py-4">
          Your Developer  <br /> Journey Start<br /> <span className="gradient-text">here.</span>
        </motion.h1>
        <motion.p variants={fadeBlurUp}  className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
          Login to access your dashbord, manage your profile build your resume, write blogs, showcase projects and grow your developer identity.
        </motion.p>
      </div>
      {/* image */}
      <motion.img initial={{scale:0.3}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true,amount:0.2}} src={robo_paiyan} className="w-full lg:w-[60%] object-contain" alt="" />
    </div>
   </motion.div>
  )
}

export default Register_hero