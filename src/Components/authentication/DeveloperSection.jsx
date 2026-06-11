import React from "react";
import {
  FaUsers,
  FaBookOpen,
  FaCode,
  FaFileAlt,
  FaRobot,
} from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { Link } from "react-router-dom";
import { comma, earth } from "../../assets/images";

const platformFeatures = [
  {
    id: 1,
    title: "Build your profile",
    description: "Create a stunning developer profile and showcase your skills",
    icon: FaUsers,
    path: "/students",
  },

  {
    id: 2,
    title: "Write & share Blogs",
    description: "Share knowledge, write blogs and inspire other devlopers.",
    icon: FaBookOpen,
    path: "/blog",
  },

  {
    id: 3,
    title: "Showcase projects",
    description: "Add projects, live demos and Github reps to stand out",
    icon: FaCode,
    path: "/showcase",
  },

  {
    id: 4,
    title: "AI Resume Builder",
    description: "Build ATS-friendly resumes with Ai suggestions.",
    icon: FaFileAlt,
    path: "/resumeBuilder",
  },

  {
    id: 5,
    title: "AI Interview",
    description: "Practice mock interviews and improve your confidence.",
    icon: FaRobot,
    path: "/aiReview",
  },

  {
    id: 6,
    title: "Track Progress",
    description: "Track your coding Github & leetCode progress in one plan",
    icon: GiProgression,
    path: "/progress",
  },
];
const DeveloperSection = () => {
  return (
    <div className="outer">
      <div className="res">
        <div className="mb-15">
          <h1 className="text-2xl text-center md:text-4xl lg:text-5xl">
            Why developer love{" "}
            <span className="gradient-text">Devsphere AI</span>
          </h1>
          <div className="w-30 md:w-35 lg:w-40  rounded-2xl flex overflow-hidden h-1  mx-auto mt-2">
            <div className="bg-primary/80 h-0.75 md:h-1 lg:h-1.25 w-1/2"></div>
            <div className="bg-secondary/80 h-0.75 md:h-1 h-1.25 w-1/2"></div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 lg:gap-0">
          {platformFeatures.map((card) => {
            const Icon = card.icon;
            return (
              <Link key={card.id} to={card.path} className="mx-auto">
                <div className="group w-50  p-5 flex flex-col items-center border border-white/5 px-3 cursor-pointer hover:-translate-y-2 transition-all duration-500 hover:bg-white/[0.03] hover:border-cyan-400/20 hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)] gap-1">
                  <Icon className=" text-3xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_#22d3ee]  text-cyan-400  drop-shadow-[0_0_20px_rgba(34,211,238,0.5)] " />

                  <h1 className="capitalize text-white">{card.title}</h1>
                  <p className="text-xs text-text-secondary text-center">
                    {card.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* earth */}
        <div className=" lg:flex hidden items-center bg-[#020714] border border-[#10214a] justify-between rounded-sm my-15">
          <img src={comma} alt="" className="w-50 object-contain" />
          <h1 className="text-3xl">
            The best way to predict the future is to build{" "}
            <span className="gradient-text">build it.</span>
          </h1>
          <img src={earth} alt="" className="w-150 justify-end" />
        </div>
      </div>
    </div>
  );
};

export default DeveloperSection;
