import React from "react";
import { motion } from 'framer-motion'
import img1 from "../../assets/contact/r1.png";
import img2 from "../../assets/contact/r2.png";
import img3 from "../../assets/contact/r3.png";
import img4 from "../../assets/contact/r4.png";
import img5 from "../../assets/contact/r5.png";

const data = [
  {
    id: 1,
    title: "Innovation",
    des: "We embrace new ideas and technologies to create better solutions.",
    img: img1,
  },
  {
    id: 2,
    title: "Collaboration",
    des: "We believe in the power of community and growing together.",
    img: img2,
  },
  {
    id: 3,
    title: "Learning",
    des: "We are committed to continuous learning and improvement.",
    img: img3,
  },
  {
    id: 4,
    title: "Integrity",
    des: "We build trust through transparency, honesty and responsibility.",
    img: img4,
  },
  {
    id: 5,
    title: "Imapact",
    des: "We aim to create real impact in the lives of students and developers.",
    img: img5,
  },
];
const About_value = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="outer bg-black">
      <div className="res">
        <h1 className='relative after:absolute after:content-[""] after:w-15 after:h-1 after:rounded-2xl  after:bg-primary after:-bottom-3 after:left-1/2 after:-translate-1/2 text-center text-3xl md:text-4xl  md:after:w-20 mb-10'>
          Our Core Values
        </h1>
        <div className="flex flex-wrap gap-5 lg:gap-0">
          {data.map((item, ind) => (
            <div
              key={ind}
              className="group grow w-50 p-5 flex flex-col items-center bg-[#050B1C]  border max-w-70 border-[#0A1427] cursor-pointer hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_25px_80px_rgba(0,0,0,0.7),0_0_50px_rgba(59,130,246,0.12)] mx-auto"
            >
              <div>
                <img src={item.img} alt="" className="w-20 mx-auto transition-all duration-500 group-hover:scale-110"/>
              </div>
              <span className="text-xl font-medium">{item.title}</span>
              <p className="text-gray-400 text-xs text-center">{item.des}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About_value;
