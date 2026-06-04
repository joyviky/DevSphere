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

const ProfileHero = ({ student }) => {
  return (
    <div className="relative w-full  py-10 text-white overflow-hidden">
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
            <img
              className="rounded-full w-50 h-50 object-cover border border-primary"
              src={student.image}
              alt={student.name}
            />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl capitalize font-bold">{student.name}</h1>

            <h2 className="text-sm text-secondary-hover">{student.role}</h2>

            <div className="flex flex-wrap gap-8">
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
            </div>

            <div className="flex gap-5 text-2xl mt-10">
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
            </div>

            <div className="mt-1 flex flex-wrap gap-4">
              <button className="bg-primary px-5 py-2 rounded-md cursor-pointer text-black text-lg font-medium">
                <MdEdit className="inline-block text-2xl mr-2" />
                Edit Profile
              </button>

              <button className="px-5 py-2 rounded-md cursor-pointer border-2 border-primary text-lg">
                <FaCloudDownloadAlt className="inline-block text-2xl mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHero;
