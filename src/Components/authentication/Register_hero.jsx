import React from 'react'
import { robo_paiyan } from "../../assets/images";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import {logo} from "../../assets/images"
import { FaArrowLeftLong } from 'react-icons/fa6';



const Register_hero = () => {
  return (
   <div className='bg-black'>
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
        <span className="inline-block bg-border text-text-secondary px-5 py-1 rounded-sm">🦋 Welcome to Devsphere AI</span>
        <h1 className="text-5xl md:text-6xl  font-bold leading-tighter py-4">
          Your Developer  <br /> Journey Start<br /> <span className="gradient-text">here.</span>
        </h1>
        <p className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
          Login to access your dashbord, manage your profile build your resume, write blogs, showcase projects and grow your developer identity.
        </p>
      </div>
      {/* image */}
      <img src={robo_paiyan} className="w-full lg:w-[60%] object-contain" alt="" />
    </div>
   </div>
  )
}

export default Register_hero