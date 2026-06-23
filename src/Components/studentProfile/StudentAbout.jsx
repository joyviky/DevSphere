import React from "react";
import { motion } from 'framer-motion'
import { FaRegCalendarAlt, FaRegUser, FaUniversity } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FaCodeBranch, FaGlobe } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdStreetview } from "react-icons/md";
import { FaBuildingColumns } from "react-icons/fa6";

const StudentAbout = ({ student }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="bg-black">
      <div className="w-full max-w-7xl mx-auto pt-10 text-white flex flex-col gap-10 md:flex-row">
        {/* left */}
        <div className="bg-backSurface max-w-md sm:max-w-xl mx-auto rounded-md p-5">
          <h1 className="text-3xl font-semibold my-3">About Me</h1>
          <p className="text-gray-400 line-clamp-4 text-sm mb-10">
            {student.about}
          </p>
          <div className="space-y-5">
            <div className="grid grid-cols-[180px_1fr] items-start">
              <p className="text-gray-500 flex items-center">
                <FaRegUser className="mr-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                Name
              </p>
              <p className="text-gray-300">{student.name}</p>
            </div>

            <div className="grid grid-cols-[180px_1fr] items-start">
              <p className="text-gray-500 flex items-center">
                <FaRegCalendarAlt className="mr-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                Date of Birth
              </p>
              <p className="text-gray-300">{student.dob}</p>
            </div>

            <div className="grid grid-cols-[180px_1fr] items-start">
              <p className="text-gray-500 flex items-center">
                <IoLocationOutline className="mr-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                Location
              </p>
              <p className="text-gray-300">{student.location}</p>
            </div>

            <div className="grid grid-cols-[180px_1fr] items-start">
              <p className="text-gray-500 flex items-center">
                <FaBuildingColumns className="mr-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                College
              </p>
              <p className="text-gray-300">{student.college}</p>
            </div>

            <div className="grid grid-cols-[180px_1fr] items-start">
              <p className="text-gray-500 flex items-center">
                <FaCodeBranch className="mr-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                Branch
              </p>
              <p className="text-gray-300">{student.branch}</p>
            </div>

            <div className="grid grid-cols-[180px_1fr] items-start">
              <p className="text-gray-500 flex items-center">
                <IoMailOutline className="mr-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                Email
              </p>
              <p className="text-gray-300 break-all">{student.email}</p>
            </div>

            <div className="grid grid-cols-[180px_1fr] items-start">
              <p className="text-gray-500 flex items-center">
                <FaGlobe className="mr-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                Website
              </p>

              <a
                href={student.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition "
              >
                Visit Portfolio
              </a>
            </div>
            <a
              href={student.resume}
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-flex w-full  items-center gap-2 px-5 py-2 rounded-xl bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-black transition-all duration-300 my-10"
            >
              <MdStreetview className="text-lg" />
              View Resume
            </a>
          </div>
        </div>
        {/* right */}
        <div className="">
          {/* top */}
          <div className="bg-backSurface max-w-md sm:max-w-xl mx-auto rounded-md p-5 max-70 mb-5">
            <h1 className="text-3xl font-semibold my-3">Tech Stack</h1>
            <div className="flex flex-wrap  gap-2">
              {student.techStacks.map((skill) => (
                <p
                  key={skill}
                  className="bg-[#130c26b5] inline-block px-5 py-1 rounded-sm text-sm border border-[#3a71a932]"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
          {/* bottom */}
          <div className="bg-backSurface max-w-md sm:max-w-xl mx-auto rounded-md p-5 max-70">
            <h1 className="text-3xl font-semibold my-3 mb-7">Skills</h1>
            <div>
              {student.skills.map((skill, index) => (
                <div key={index}>
                  
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-medium">{skill.name}</h3>

                    <span className="text-cyan-400 font-semibold">
                      {skill.percentage}%
                    </span>
                  </div>

                  <div className="w-full h-2 bg-[#1a2338] rounded-full overflow-hidden mb-3">
                    <div
                      className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-violet-500
                  via-blue-500
                  to-cyan-400
                  shadow-[0_0_15px_rgba(34,211,238,0.6)]
                  transition-all
                  duration-1000
                "
                      style={{
                        width: `${skill.percentage}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default StudentAbout;
