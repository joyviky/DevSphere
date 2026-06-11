import React from "react";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline, MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Register_Form = () => {
  return (
    <div className="outer h-screen">
      <div className="res ">
        <form
          action=""
          className="w-full mx-auto max-w-md lg:max-w-lg  border backdrop-blur-xl border-primary   rounded-2xl p-8 shadow-2xl shadow-secondary/30 my-10"
        >
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white">
              Create Account 🚀
            </h1>
            <p className="text-center text-slate-400 mt-2">
              Join thousands of developers on DevSphere AI
            </p>
          </div>
          <div className="mb-5">
           <label htmlFor="" className="block text-sm md:text-md font-medium mb-1">Full Name</label>
           <div className="relative">
             <input type="text" name="" id="" placeholder="Enter your full name" className="outline-0 border w-full px-4 py-1 rounded-sm  border-slate-800 focus:border-primary placeholder:text-sm md:placeholder:text-md md:py-2  placeholder:text-gray-600"/>
             <FaRegUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 md:text-lg ext-md" />
           </div>
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
          <div className="mb-5">
           <label htmlFor="" className="block text-sm md:text-md font-medium mb-1">Confirm Password</label>
           <div className="relative">
             <input type="text" name="" id="" placeholder="Confirm your password" className="outline-0 border w-full px-4 py-1 rounded-sm  border-slate-800 focus:border-primary placeholder:text-sm md:placeholder:text-md md:py-2  placeholder:text-gray-600"/>
             <MdLockOutline className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 md:text-lg text-md" />
           </div>
          </div>
          {/* check box */}
          <div className="flex text-sm gap-2">
            <input type="checkbox" name="" id="" className="accent-primary"/>
            <p>I agree to the <span className="text-primary">Terms of Service</span> and <span className="text-primary">Privacy Policy</span></p>
          </div>
          <button  className=" w-full text-center cursor-pointer font-semibold rounded-sm text-white py-1 md:py-2 my-3 border border-primary hover:bg-primary hover:text-black duration-200">Register</button>
         <p className="text-center text-slate-500 mt-2  mb-2">
              Already have an account?
              <Link to={"/login"} className="text-primary"> Login</Link>
            </p>
        </form>
      </div>
    </div>
  );
};

export default Register_Form;
