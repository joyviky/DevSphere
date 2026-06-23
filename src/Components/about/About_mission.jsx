import React from "react";
import { motion } from 'framer-motion'
import img from "../../assets/contact/m1.png";

const About_mission = () => {
  return (
    <motion.section initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="w-full pb-10 lg:pb-0 overflow-hidden bg-[#00091A] flex flex-col lg:flex-row items-center lg:items-start justify-between px-6 md:px-12 lg:px-20">
      {/* Image Container */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2 lg:order-1 p-4 md:p-10 lg:p-14">
        <img 
          src={img} 
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain" 
          alt="DevSphere AI Bot Illustration" 
        />
      </div>
  
      {/* Content Container */}
      <div className="w-full lg:w-1/2 text-white flex flex-col justify-center pt-10 lg:pt-24 order-1 lg:order-2">
        <span className="text-sm tracking-wider font-semibold text-cyan-400 uppercase">
          About us—-
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight py-4">
          Building The Future{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Together.
          </span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed">
          DevSphere AI is an all-in-one platform designed to empower students
          and developers to learn, build, collaborate, and grow in their tech
          journey with the power of AI.
        </p>
      </div>
    </motion.section>
  );
};

export default About_mission;