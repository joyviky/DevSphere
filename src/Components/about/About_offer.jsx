import React from 'react'
import { motion } from 'framer-motion'
import img1 from "../../assets/contact/o1.png";
import img2 from "../../assets/contact/o2.png";
import img3 from "../../assets/contact/o3.png";
import img4 from "../../assets/contact/o4.png";
import img5 from "../../assets/contact/o5.png";
import img6 from "../../assets/contact/o6.png";

const data = [
  {
    id: 1,
    title: "Al Resume Builder",
    des: "Create a professional resume that stands out and gets you noticed.",
    img: img1,
  },
  {
    id: 2,
    title: "Interview Simulator",
    des: "Practice with Al-powered mock interviews and boost your confidence.",
    img: img2,
  },
  {
    id: 3,
    title: "GitHub & LeetCode Analytics",
    des: "Track your progress and Improve your coding journey with insights.",
    img: img3,
  },
  {
    id: 4,
    title: "Student Directory",
    des: "Discover and connect with Amirina davalorers trom your college and BsCurrencyPound.",
    img: img4,
  },
  {
    id: 5,
    title: "Blogs & Ariticles",
    des: "Reed and share knowledge on the latest tech trends and tutorials.",
    img: img5,
  },{
    id: 6,
    title: "Career Roadmap",
    des: "Get personalized career guidance and the best roadmap for your future.",
    img: img6,
  },
];
const About_offer = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
         <div className="outer bg-black">
      <div className="res">
        <h1 className='relative after:absolute after:content-[""] after:w-15 after:h-1 after:rounded-2xl  after:bg-primary after:-bottom-3 after:left-1/2 after:-translate-1/2 text-center text-3xl md:text-4xl  md:after:w-20 mb-10'>
          What We Offer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, ind) => (
            <div
              key={ind} className="group p-5 cursor-pointer flex gap-3 items-center bg-[#050B1C] border border-[#0A1427] transition-all duration-500 hover:border-blue-500/30"
            >
              <div>
                <img src={item.img} alt="" className="w-100 max-w-30 mx-auto transition-all duration-500 group-hover:scale-110"/>
              </div>
              <div className=''>
                <span className="text-2xl font-light ">{item.title}</span>
                <p className="text-gray-400 text-sm font-light mt-5">{item.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </motion.div>
  )
}

export default About_offer