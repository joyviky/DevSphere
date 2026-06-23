import React from "react";
import { laptop } from "../../assets/images";
import { Link } from "react-router-dom";
import Button from "../buttons/Button";
import { FaArrowRight } from "react-icons/fa";
import {motion} from "framer-motion"
import MarqueeLib from "react-fast-marquee";

const Marquee = MarqueeLib.default || MarqueeLib;

const containerVariants={
  initial:{},
  animate:{
    transition:{
    staggerChildren:0.25
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




const marqueeDatas=[
  {
    id:1,
    content:"🚀 Showcase Your Skills"
  },
  {
    id:2,
    content:"💻 Build Amazing Projects "
  },
  {
    id:3,
    content:"✍️ Share Technical Blogs"
  },
  {
    id:4,
    content:"🏆 Highlight Achievements "
  },
  {
    id:5,
    content:"🤝 Connect With Students"
  },
  {
    id:6,
    content:"🤖 Powered by AI "
  },
  {
    id:7,
    content:" 🌟 Building the Future Together "
  },

]
const Banner = () => {
  return (
    <div>
       <div className="w-full min-h-160 bg-[#010210] flex flex-col-reverse lg:flex-row">
      {/* content motion.*/}
      <motion.div variants={containerVariants} initial="initial" whileInView="animate"   viewport={{ once: true, amount: 0.2 }}  className=" text-white  pl-8 pt-20 lg:pl-30 max-wl-xl">
        <motion.p variants={fadeBlurUp} className="uppercase lg:pt-10  font-semibold text-primary ">
          Ready to get started? 
        </motion.p>
        <motion.h1 variants={fadeBlurUp} className="text-3xl md:text-6xl lg:text-5xl font-bold leading-tighter py-4">
          Your developer Journey <br />
          <span className="gradient-text">Starts Here</span>
        </motion.h1>
        <motion.p variants={fadeBlurUp} className="text-text-secondary text-md pr-5 sm:pr-0 md:text-lg max-w-lg ">
         Join DeveSphere AI today and tad take the step towards building your developer identity
        </motion.p>
        <motion.div variants={fadeBlurUp} className="flex justify-start -ml-2 mt-3">
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
        </motion.div>
      </motion.div>
      {/* image */}
      <motion.img initial={{scale:0.3}} whileInView={{scale:1}} transition={{duration:0.5}} viewport={{once:true,amount:0.2}} src={laptop} className="w-full lg:w-[55%] object-contain" alt="" />
      
    </div>
      <div className='group select-none py-10 bg-[#040816] w-full h-15   text-white my-5'>
        <Marquee speed={50}  pauseOnHover>
          {
            marqueeDatas.map((cnt,ind)=>(
              <span key={ind} className='inline-block px-10  font-medium duration-300 text-primary group-hover:text-gray-600  hover:scale-110 hover:text-primary '>
                {cnt.content}
              </span>
            ))
          }
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
