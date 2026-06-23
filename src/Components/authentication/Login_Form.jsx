import React from "react";
import { motion } from "framer-motion";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import github from '../../assets/github.png'
import google from '../../assets/google.jpg'
import linkedin from '../../assets/linkedin.png'
import person from '../../assets/person.png'

const Login_Form = () => {
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }} className="outer h-screen">
          <div className="res ">
            <form
              action=""
              className="w-full mx-auto max-w-md lg:max-w-lg  border backdrop-blur-xl border-primary   rounded-2xl p-8 shadow-2xl shadow-secondary/30 my-10"
            >
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
                   Welcome Back 👋
                </h1>
                <p className="text-center text-slate-400 mt-2">
                  Login to continue your developer
                </p>
              </div>
              <div className="mb-5">
               <label htmlFor="" className="block text-sm md:text-md font-medium mb-1">Email Address</label>
               <div className="relative">
                 <input type="text" name="" id="" placeholder="Enter your email" className="outline-0  w-full px-4 py-1 rounded-sm border border-slate-800 focus:border-primary placeholder:text-sm md:placeholder:text-md md:py-2  placeholder:text-gray-600"/>
                 <MdOutlineEmail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 md:text-lg ext-md" />
               </div>
              </div>
              <div className="mb-5">
               <label htmlFor="" className="block text-sm md:text-md font-medium mb-1">Password</label>
               <div className="relative">
                 <input type="text" name="" id="" placeholder="Create a password" className="outline-0 border w-full px-4 py-1 rounded-sm  border-slate-800 focus:border-primary placeholder:text-sm md:placeholder:text-md md:py-2  placeholder:text-gray-600"/>
                 <MdLockOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 md:text-lg ext-md" />
               </div>
              </div>
              {/* check box */}
              <div className="text-right mt-2">
                        <a className="text-primary text-sm cursor-pointer">
                          Forgot Password?
                        </a>
                      </div>
              
                      <button
                        className="
                          bg-primary
                          w-full
                          rounded-xl
                          py-2
                          mt-6
                          font-semibold
                          text-black
                          hover:bg-primary-hover
                          transition
                        "
                      >
                        Login
                      </button>
              
                      <p className="text-center text-gray-400 my-6">
                        — or continue with —
                      </p>
              
                      <div className="flex justify-center gap-6">
                        <img src={github} alt="github" className="w-6 cursor-pointer" />
                        <img src={google} alt="google" className="w-6 cursor-pointer" />
                        <img src={linkedin} alt="linkedin" className="w-6 cursor-pointer" />
                      </div>
              
                      <p className="text-white text-center mt-6">
                        Don’t have an account?
                        <Link to={"/register"}>
                        <span className="text-primary cursor-pointer ml-1">
                          Register
                        </span></Link>
                      </p>
            </form>
          </div>
        </motion.div>
  )
}

export default Login_Form