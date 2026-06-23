import React from 'react'
import { motion } from "framer-motion";

import Home from "../pages/Home";
import Students from "../pages/Students";
import StudentProfile from "../pages/StudentProfile";
import StudentDashborad from "../pages/StudentDashborad";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Student_EditProfile from "../pages/Student_EditProfile";
import Blogs from "../pages/Blogs";
import Gallery from "../pages/Gallery";
import Features from "../pages/Features";
import Contact from "../pages/Contact";
import About from "../pages/About";


const pageVariants = {
  exit: {
    x: "-100vh",
    opacity: 0,
  },
};


const PageTransition = ({ children }) => {
  return (
    <motion.div variants={pageVariants} exit="exit" transition={{duration:0.5}}>
        {children}
    </motion.div>
  )
}

export default PageTransition