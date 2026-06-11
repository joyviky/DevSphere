import React from "react";
import {
  FaUsers,
  FaBookOpen,
  FaImages,
  FaFileAlt,
  FaRobot,
  FaRoad,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const platformFeatures = [
  {
    id: 1,
    title: "Student Directory",
    description: "Discover talented developers and connect with peers.",
    icon: FaUsers,
    path:"/students"
  },

  {
    id: 2,
    title: "Blogs Platform",
    description: "Read and share developer stories, tutorials and insights.",
    icon: FaBookOpen,
    path:"/blog"
  },

  {
    id: 3,
    title: "Gallery",
    description: "Capture moments and showcase your achievements.",
    icon: FaImages,
    path:"/gallery"
  },

  {
    id: 4,
    title: "Resume Builder",
    description: "Build ATS-friendly resumes and stand out to recruiters.",
    icon: FaFileAlt,
    path:"/resumeBuilder"
  },

  {
    id: 5,
    title: "AI Interview",
    description: "Practice mock interviews and improve your confidence.",
    icon: FaRobot,
    path:"aiReview"
  },

  {
    id: 6,
    title: "Career Roadmap",
    description: "Plan your learning journey and achieve career goals.",
    icon: FaRoad,
    path:"/career"
  },
];

const Platform = () => {
  return (
    <div className="bg-[#040816] w-full py-10 text-white">
      <div className="max-w-7xl mx-auto">
        <p className="uppercase font-semibold text-primary text-center">
          Explore our platform
        </p>
        <h1 className="text-center text-4xl mt-3 font-extralight capitalize mb-20">
          All the tools you need in one place
        </h1>
        <div className="flex flex-wrap gap-5 lg:gap-0 ">
          {platformFeatures.map((card) => {
            const Icon = card.icon;

            return (
              <Link key={card.id} to={card.path} className="mx-auto">
              <div  className="group w-50  p-5 flex flex-col items-center border border-white/5 px-3 cursor-pointer hover:-translate-y-2 transition-all duration-500 hover:bg-white/[0.03] hover:border-cyan-400/20 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)]">
                <Icon className=" text-3xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#22d3ee]  text-cyan-400  drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] " />

                <h1 className="capitalize text-white">{card.title}</h1>
                <p className="text-xs text-text-secondary text-center">{card.description}</p>
              </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Platform;
