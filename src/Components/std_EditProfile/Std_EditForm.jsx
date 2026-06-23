import React from "react";
import { motion } from "framer-motion";
import { studentProfile } from "../../datas/studentData";
import {
  FaCheckCircle,
  FaEdit,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
  FaRegFileAlt,
  FaRegShareSquare,
  FaRegUserCircle,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { SiBiolink, SiIcon, SiLeetcode } from "react-icons/si";
import { LiaLinkedin } from "react-icons/lia";
import { IoClose, IoGlobeOutline, IoGlobeSharp } from "react-icons/io5";
import { RiMediumFill } from "react-icons/ri";
import { GiPlantsAndAnimals } from "react-icons/gi";
import { FaMapLocation } from "react-icons/fa6";
import { AiFillDingtalkCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const stdData = studentProfile;
const Std_EditForm = ({ id }) => {
  const student = studentProfile.find((item) => item.id === Number(id));
  console.log(student);
  return (
    <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }} className="outer">
      <div className="res">
        <div className="flex flex-col lg:flex-row">
          {/* left form */}
          <div className="bg-[#050B16] grow border border-primary/10 p-5 rounded-sm">
            <PersonalInformation student={student} />
            <BioSocialLinks student={student} />
            <StudentSkill student={student} />
            <EducationSection student={student} />
          </div>
          {/* right form */}
          <div className="w-full lg:w-[35%] lg:pl-5 mt-5 lg:mt-0">
            <StudentCard card={student} />
            <ProfileSetion student={student} />
            <StatusSection student={student}/>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
function PersonalInformation({ student }) {
  return (
    <div className="pb-10  border-b-2 border-primary/10">
      <div className="flex justify-between items-center">
        <h1 className="flex items-center gap-2 capitalize text-lg">
          <FaRegUserCircle className="text-primary text-2xl bg-gray-800 rounded-full" />
          personal Information
        </h1>
        <p className="text-xs text-gray-400">Update your basic details</p>
      </div>
      {/* bottom */}
      <div className="mt-5 flex flex-col md:flex-row gap-10 ">
        {/* image */}
        <div className="flex flex-col relative max-w-40">
          <h1 className="capitalize mb-2">profile Photo</h1>
          <img src={student.image} alt="" className="rounded-full w-30" />
          <p className="text-[10px] mt-1">JPG,PNG,GIF,Max size 2MB</p>
          <FaEdit className="text-primary cursor-pointer text-xl absolute right-5 top-33" />
        </div>
        {/* form */}
        <div className="grow space-y-6">
          <div className="">
            <label
              htmlFor=""
              className="after:content-['*'] after:text-pink-800"
            >
              Name
            </label>
            <input
              type="text"
              value={student.name}
              className="border-2 border-primary/10 px-2 py-1 w-full outline-0 rounded-sm"
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="after:content-['*'] after:text-pink-800"
            >
              Email
            </label>
            <input
              type="email"
              value={student.email}
              className="border-2 border-primary/10 px-2 py-1 w-full outline-0 rounded-sm"
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="after:content-['*'] after:text-pink-800"
            >
              College / University
            </label>
            <input
              type="text"
              value={student.college}
              className="border-2 border-primary/10 px-2 py-1 w-full outline-0 rounded-sm"
            />
          </div>
          <div className="">
            <label
              htmlFor=""
              className="after:content-['*'] after:text-pink-800"
            >
              Location
            </label>
            <input
              type="text"
              value={student.location}
              className="border-2 border-primary/10 px-2 py-1 w-full outline-0 rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
function BioSocialLinks({ student }) {
  return (
    <div className="pt-10 border-b-2 border-primary/10 pb-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="flex items-center gap-2 capitalize text-lg">
          <SiIcon className="text-secondary text-2xl " />
          Bio & Social Links
        </h1>
        <p className="text-xs text-gray-400">
          Tell the community about yourself
        </p>
      </div>
      {/* form */}
      <div className="space-y-6">
        <div>
          <label htmlFor="" className="block">
            Bio
          </label>
          <textarea
            name=""
            value={student.bio}
            placeholder="Passionate Full Stack Developer | MERN Stack Enthuaiastic"
            id=""
            className="border-2 h-30 border-primary/10 w-full p-2 placeholder:text-sm outline-0"
          ></textarea>
        </div>
        <div className="flex items-center border-2 border-primary/10 rounded-sm p-1">
          <label
            htmlFor="git"
            className="flex items-center text-primary gap-3 text-sm"
          >
            <FaGithub className="text-2xl text-white" />
            GitHub
          </label>
          <input
            type="text"
            placeholder="https://github.com/username"
            className="grow"
            id="git"
            className="p-1 grow outline-0 placeholder:text-sm"
          />
        </div>
        <div className="flex items-center border-2 border-primary/10 rounded-sm p-1">
          <label
            htmlFor="med"
            className="flex items-center text-primary gap-3 text-sm"
          >
            <RiMediumFill className="text-2xl text-[#944f80]" />
            Medium
          </label>
          <input
            type="text"
            placeholder="@username"
            className="grow"
            id="med"
            className="p-1 grow outline-0 placeholder:text-sm"
          />
        </div>
        <div className="flex items-center border-2 border-primary/10 rounded-sm p-1">
          <label
            htmlFor="linked"
            className="flex items-center text-primary gap-3 text-sm"
          >
            <FaLinkedinIn className="text-2xl text-[#2984df]" />
            Linkedin
          </label>
          <input
            type="text"
            placeholder="https://www.linkedin.com/in/username"
            className="grow"
            id="linked"
            className="p-1 grow outline-0 placeholder:text-sm"
          />
        </div>
        <div className="flex items-center border-2 border-primary/10 rounded-sm p-1">
          <label
            htmlFor="leet"
            className="flex items-center text-primary gap-3 text-sm"
          >
            <SiLeetcode className="text-2xl text-[#a4a401]" />
            Leet Code
          </label>
          <input
            type="text"
            placeholder="https://leetcode.com/u/Joy_boy485/"
            className="grow"
            id="leet"
            className="p-1 grow outline-0 placeholder:text-sm"
          />
        </div>
        <div className="flex items-center border-2 border-primary/10 rounded-sm p-1">
          <label
            htmlFor="link"
            className="flex items-center text-primary gap-3 text-sm"
          >
            <IoGlobeOutline className="text-2xl text-white/50" />
            Porfolio
          </label>
          <input
            type="text"
            placeholder="https://..."
            className="grow"
            id="link"
            className="p-1 grow outline-0 placeholder:text-sm"
          />
        </div>
        <div className="flex items-center border-2 border-primary/10 rounded-sm p-1">
          <label
            htmlFor="res"
            className="flex items-center text-primary gap-3 text-sm"
          >
            <FaRegFileAlt className="text-2xl text-emerald-400" />
            Resume
          </label>
          <input
            type="file"
            className="grow"
            id="res"
            className="p-1 grow outline-0 placeholder:text-sm"
          />
        </div>
      </div>
    </div>
  );
}
function StudentSkill({ student }) {
  const data = student.skills;
  return (
    <div className="pt-5">
      <div className="flex justify-between items-center mb-5">
        <h1 className="flex items-center gap-2 capitalize text-lg">
          <GiPlantsAndAnimals className="text-[#833883] text-2xl " />
          Skills
        </h1>
        <p className="text-xs text-gray-400">Add your technical skills</p>
      </div>
      <div className="border-b-2 border-primary/20 pb-5">
        <div className="flex flex-wrap gap-1">
          {data.map((std) => (
            <h1
              className="flex items-center gap-3  border-2 border-primary/20 bg-primary/5  text-sm w-fit p-1 rounded-sm "
              key={std.name}
            >
              {std.name} <IoClose className="cursor-pointer" />
            </h1>
          ))}
        </div>
        <input
          type="text"
          className="border-2 border-primary/20 placeholder:text-sm  w-full outline-0 px-2 py-1 my-2 rounded-sm "
          placeholder="Add a skill and press enter"
        />
      </div>
    </div>
  );
}
function EducationSection({ student }) {
  return (
    <div className="pb-5 ">
      <h1 className="flex items-center gap-2 capitalize text-lg my-5">
        <AiFillDingtalkCircle className="text-[#077250] text-2xl " />
        About You
      </h1>
      <div>
        <div className="flex gap-5 w-full">
          <div className="grow">
            <label htmlFor="" className="">
              Role
            </label>
            <input
              type="text"
              placeholder="Full Stack Developer"
              className="border-2 border-primary/10 px-2 py-1 w-full outline-0 rounded-sm placeholder:text-sm"
            />
          </div>
          <div className="">
            <label htmlFor="" className="">
              Experience Level
            </label>
            <input
              type="text"
              placeholder="Intermediate"
              className="border-2 border-primary/10 px-2 py-1 w-full outline-0 rounded-sm placeholder:text-sm"
            />
          </div>
        </div>
      </div>
      <div className="py-5">
        <label htmlFor="" className="">
          Currently Learning
        </label>
        <input
          type="text"
          placeholder="System Design, Docker, AWS"
          className="border-2 border-primary/10 px-2 py-1 w-full outline-0 rounded-sm placeholder:text-sm"
        />
      </div>
      <div className="">
        <label htmlFor="" className="">
          Interests
        </label>
        <input
          type="text"
          placeholder="Web Development, Open Source"
          className="border-2 border-primary/10 px-2 py-1 w-full outline-0 rounded-sm placeholder:text-sm"
        />
      </div>
      <div className="flex gap-5 mt-5">
        <button className="border border-primary py-1 px-5 rounded-sm cursor-pointer">
          Cancel
        </button>
        <button
          className=" py-1 px-5 rounded-sm w-full cursor-pointer"
          style={{ background: "var(--gradient-text)" }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
function Education({ student }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-5 py-5">
        <h1 className="flex items-center gap-2 capitalize text-lg">
          <FaMapLocation className="text-secondary text-2xl " />
          Education
        </h1>
        <p className="text-xs text-gray-400">Add your education details</p>
      </div>
    </div>
  );
}
function StudentCard({ card }) {
  return (
    <div>
      <div className="relative border-2 bg-[#050B16] border-primary/20 rounded-sm overflow-hidden">
        {/* cover */}
        <div>
          <img src={card.cover} alt="" className="w-full object-center h-35" />
        </div>
        {/* image */}
        <img
          src={card.image}
          alt=""
          className="w-30 h-30 rounded-full
      border-4 border-[#050B16]
      absolute left-1/2 -translate-x-1/2
      top-20
      object-cover "
        />
        {/* content */}
        <div className="text-center pt-20">
          <h3 className="text-white text-lg font-semibold ">{card.name}</h3>
          <p className="text-gray-400 text-xs ">{card.role}</p>
          <p className="text-gray-500 text-xs  flex  items-center gap-2 justify-center">
            <FaMapMarkerAlt />
            {card.college}
          </p>
          <p className="text-sm p-6 text-gray-400">{card.bio}</p>
        </div>
        <div className="flex justify-center my-5 gap-5">
          <Link to={card.github}>
            <FaGithub className="text-2xl text-white" />
          </Link>
          <Link to={card.linkedin}>
            <FaLinkedinIn className="text-2xl text-[#2984df]" />
          </Link>
          <Link to={card.leetcode}>
            {" "}
            <SiLeetcode className="text-2xl text-[#a4a401]" />
          </Link>
          <Link to={card.porfolio}>
            <IoGlobeOutline className="text-2xl text-white/50" />
          </Link>
        </div>
        <Link
          to={card.link}
          className="w-[90%] flex items-center justify-center  border mx-auto  gap-3  transition text-primary text-center border-cyan-500/40 hover:bg-cyan-500  hover:text-black rounded-sm cursor-pointer py-1 my-5"
        >
          View Profile <FaRegShareSquare className="" />
        </Link>
      </div>
    </div>
  );
}
function ProfileSetion({ student }) {
  const sections = [
    {
      title: "Basic Information",
      completed: 5,
      total: 5,
    },
    {
      title: "Bio & Social Links",
      completed: 4,
      total: 5,
    },
    {
      title: "Skills",
      completed: 5,
      total: 5,
    },
    {
      title: "Education",
      completed: 5,
      total: 5,
    },
    {
      title: "Projects",
      completed: 3,
      total: 5,
    },
    {
      title: "Achievements",
      completed: 3,
      total: 5,
    },
  ];
  const percent = 83;
  return (
    <div>
      <div className="border-2 border-primary/20 bg-[#050B16] p-5 rounded-sm my-5">
        <h1 className="text-2xl">Profile Completion</h1>
        <p className="text-sm text-gray-400">
          Keep going! Your're almost there.
        </p>
        <div className="w-50 mx-auto my-5">
          <CircularProgressbar
            value={85}
            text={`${85}%`}
            styles={{
              path: { stroke: "#10b981", strokeLinecap: "round" },
              trail: {
                stroke: "#1e293b",
              },
              text: {
                fill: "#fff",
                fontSize: "18px",
                fontWeight: "bold",
              },
            }}
          />
        </div>
        <p className=" text-gray-400 text-center">
          Excellent! Complete your profile to get more opputunities.
        </p>
        <div>
          {sections.map((info) => {
            return (
              <div
                key={info.title}
                className="flex items-center justify-between my-1 p-2 border-1 border-primary/10 rounded-sm "
              >
                <div className="flex items-center gap-1">
                  <FaCheckCircle className="text-[#10b981]" />{" "}
                  <p>{info.title}</p>
                </div>
                <span
                  className={`${info.completed === info.total ? "text-[#10b981]" : "text-gray-400"}`}
                >
                  {info.completed}/{info.total}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function StatusSection({ student }) {
  const data = [
    {
      id: 1,
      num: 12,
      title: "Project Built",
      color: "text-emerald-400",
    },
    {
      id: 2,
      num: 248,
      title: "LeetCode Solved",
      color: "text-emerald-400",
    },
    {
      id: 3,
      num: 128,
      title: "GitHub Comments",
      color: "text-blue-400",
    },
    {
      id: 4,
      num: 14,
      title: "Achiement",
      color: "text-yellow-400",
    },
  ];
  return (
    <div>
      <div className="border-2 border-primary/10 bg-[#050B16] p-5 rounded-sm my-5">
        <h1 className="text-2xl">Your Stats</h1>
        <p className="text-sm text-gray-400">Your overall developer stats</p>
        <div className="grid grid-cols-2 gap-5 my-5">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="border-2 rounded-md bg-[#010816] border-primary/10 p-5 text-center"
              >
                <h1 className={`text-4xl ${item.color}`}>{item.num}</h1>
                <p className={`text-xs mt-1 text-gray-400  `}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Std_EditForm;
