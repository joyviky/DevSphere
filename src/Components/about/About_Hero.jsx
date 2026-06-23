import React from 'react'
import { motion } from 'framer-motion'

import { about_hero, blog_hero } from '../../assets/images'
import { FaSearch } from 'react-icons/fa'

const About_Hero = () => {
    return (
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="w-full pb-10 lg:pb-0 min-h-160 overflow-hidden bg-black flex flex-col-reverse lg:flex-row items-center">
             {/* content */}
             <div className="text-white  pl-8 lg:pt-20 lg:pl-30 max-wl-xl place-self-start">
               <span className="inline-block text-primary  py-1 uppercase">
               About us--
               </span>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tighter py-4">
                 Building The Future
                 <span className="gradient-text">Together.</span>
               </h1>
               <p className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
               DevSphere Al is an all-in-one platform designed to empower students and developers to learn, build, collaborate, and grow in their tech journey with the power of Al. </p>
             </div>
             {/* image */}
             <motion.img src={about_hero} initial={{ scale: 0.95 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="w-full p-10  lg:w-160 " alt="" />
    </motion.div>
  )
}

export default About_Hero