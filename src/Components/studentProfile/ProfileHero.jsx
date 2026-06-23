import React from "react";
import { FaAngleRight, FaCloudDownloadAlt, FaGithub, FaLink } from "react-icons/fa";
import {
  IoLocationOutline,
  IoLogoLinkedin,
  IoMailOpenOutline,
} from "react-icons/io5";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import mount from "../../assets/authenticationImg/mount1.png";
import { useNavigate } from "react-router-dom";
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
const ProfileHero = ({ student,id }) => {
  const navigate=useNavigate();
  return (
    <motion.div variants={containerVariants} initial="initial" whileInView="animate"   viewport={{ once: true, amount: 0.2 }}  className="relative w-full  py-10 text-white overflow-hidden">
      {/* Blurred Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[5px] scale-110"
        style={{ backgroundImage: `url(${mount})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-10">
        <h1 className="bg-[#50505844] text-primary px-5 py-1 rounded inline-block">
          Student <FaAngleRight className="inline-block" />{" "}
          <span className="text-white">{student.name}</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start my-10">
          <div>
            <motion.img initial={{ opacity: 0,scale:0.8}} whileInView={{opacity:1,scale:1}} transition={{duration:0.5,ease: "easeOut"}} viewport={{once:true,amount:0.2}}
              className="rounded-full w-50 h-50 object-cover border border-primary"
              src={student.image}
              alt={student.name}
            />
          </div>

          <div className="flex flex-col gap-3">
            <motion.h1 variants={fadeBlurUp}  className="text-4xl capitalize font-bold">{student.name}</motion.h1>

            <motion.h2 variants={fadeBlurUp}  className="text-sm text-secondary-hover">{student.role}</motion.h2>

            <motion.div variants={fadeBlurUp}  className="flex flex-wrap gap-8">
              <p className="flex items-center text-sm gap-2">
                <IoLocationOutline className="text-2xl text-primary" />
                {student.location}
              </p>

              <p className="flex items-center text-sm gap-2">
                <IoMailOpenOutline className="text-2xl text-primary" />
                {student.email}
              </p>

              <a href={student.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm gap-2">
                <FaLink className="text-2xl text-primary" />
                Portfolio
              </a>
            </motion.div>

            <motion.div variants={fadeBlurUp}  className="flex gap-5 text-2xl mt-10">
              <a
                href={student.github}
                target="_blank"
                className="bg-[#181823] p-3 rounded-lg hover:scale-105 transition"
              >
                <FaGithub />
              </a>

              <a
                href={student.linkedin}
                target="_blank"
                className="bg-[#181823] p-3 rounded-lg hover:scale-105 transition"
              >
                <IoLogoLinkedin />
              </a>
            </motion.div>

            <motion.div variants={fadeBlurUp}  className="mt-1 flex flex-wrap gap-4">
              <button onClick={()=>{navigate(`/students/${id}/std_edit`)}} className="bg-primary px-5 py-2 rounded-md cursor-pointer text-black text-lg font-medium">
                <MdEdit className="inline-block text-2xl mr-2" />
                Edit Profile
              </button>

              <a href={`${student.resume}`} download target="_blank" >
                <button className="px-5 py-2 rounded-md cursor-pointer border-2 border-primary text-lg">
                <FaCloudDownloadAlt className="inline-block text-2xl mr-2" />
                Download Resume
              </button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileHero;
