import React, { useEffect, useState } from "react";
import Hero from "../Components/home/Hero";
import Header from "../Components/Header";
import Countup from "../Components/home/Countup";
import Career from "../Components/home/Career";
import Platform from "../Components/home/Platform";
import Community from "../Components/home/Community";
import Banner from "../Components/home/Banner";
import Footer from "../Components/Footer";
import { div } from "framer-motion/client";
import img from "../assets/contact/Bac.png"

import {
  FaLaptopCode,
  FaUserGraduate,
  FaRocket,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const popupSeen = sessionStorage.getItem("devsphere-popup");
    console.log("Pop screen :"+popupSeen);
    if (!popupSeen) {
      setOpen(true);
    }
  }, []);
   const handleStart = () => {
    sessionStorage.setItem("devsphere-popup", "true");
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <div className="w-screen h-screen grid place-content-center " style={{background:`url(${img})`}}>
          <div className="w-100 md:w-140  bg-white/10  backdrop-blur-xl p-5">
            {/* cont */}
            <div>
              <h1 className="text-2xl font-bold mb-6 text-primary">
                Welcome to DevSphere AI
              </h1>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/20 border border-primary/10">
                  <FaLaptopCode className="text-primary text-2xl mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    For the best experience, use a laptop or desktop to explore
                    the 3D models and animations.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/20 border border-primary/10">
                  <FaUserGraduate className="text-primary text-2xl mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Don't forget to check the Student Profile and Edit Profile
                    pages. Currently, these features are available for the first
                    student profile.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/20 border border-primary/10">
                  <FaRocket className="text-primary text-2xl mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Explore the Student Directory, Blogs, Gallery, and other
                    exciting features.
                  </p>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/20 border border-primary/10">
                  <FaHeart className="text-red-400 text-2xl mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Thank you for visiting DevSphere AI.
                  </p>
                </div>
              </div>
              <button
              onClick={handleStart}
                className="group w-full mt-6 py-3 rounded-full transition-all duration-300 hover:bg-primary hover:text-black bg-primary/20 text-white font-semibold hover:scale-[1.02] transition-all duration-300 flex  items-center justify-center gap-5 cursor-pointer">
                Start Exploring <FaArrowRightLong className="group-hover:bg-white bg-black  rounded-full text-black text-[1px] group-hover:text-2xl p-1 transition-all duration-300"/>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <Hero />
          <Countup />
          <Career />
          <Platform />
          <Community />
          <Banner />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Home;
