import React from 'react'
import CountUpLib from 'react-countup'
const CountUp = CountUpLib.default || CountUpLib
import {FaFileAlt,FaUsers,FaBookOpen,FaCommentDots,FaLayerGroup,
} from "react-icons/fa";
import {motion} from "framer-motion"

const blogStats = [
  {
    id: 1,
    number: 1248,
    suffix: "",
    label: "Total Blogs",
    icon: (
      <FaFileAlt className="bg-gradient-to-br from-[#00F5FF]/20 via-[#4F46E5]/20 to-[#A855F7]/20 text-[#00F5FF] text-5xl p-2 rounded-sm" />
    ),
  },

  {
    id: 2,
    number: 156,
    suffix: "",
    label: "Active Authors",
    icon: (
      <FaUsers className="bg-gradient-to-br from-[#F472B6]/20 via-[#D946EF]/20 to-[#8B5CF6]/20 text-[#F472B6] text-5xl p-2 rounded-sm" />
    ),
  },

  {
    id: 3,
    number: 25,
    suffix: "K+",
    label: "Total Reads",
    icon: (
      <FaBookOpen className="bg-gradient-to-br from-[#F59E0B]/20 via-[#F97316]/20 to-[#EF4444]/20 text-[#F59E0B] text-5xl p-2 rounded-sm" />
    ),
  },

  {
    id: 4,
    number: 12,
    suffix: "K+",
    label: "Comments",
    icon: (
      <FaCommentDots className="bg-gradient-to-br from-[#A78BFA]/20 via-[#8B5CF6]/20 to-[#6366F1]/20 text-[#A78BFA] text-5xl p-2 rounded-sm" />
    ),
  },

  {
    id: 5,
    number: 48,
    suffix: "",
    label: "Categories",
    icon: (
      <FaLayerGroup className="bg-gradient-to-br from-[#34D399]/20 via-[#14B8A6]/20 to-[#06B6D4]/20 text-[#34D399] text-5xl p-2 rounded-sm" />
    ),
  },
];
const Blog_countUp = () => {
  return (
    <div className='w-full  md:h-40 bg-black  border-b border-border'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5  px-8 mb-5'>
       {
        blogStats.map((card,ind)=>(
            <CountupCard id={ind} key={card.id} number={card.number} label={card.label} icon={card.icon} suffix={card.suffix}/>
        ))
       }
      </div>
    </div>
  )
}
function CountupCard({number,label,icon,suffix,id}){
    return(
        <motion.div initial={{opacity:0,y:50}} transition={{delay:id*0.15,type:"spring",stiffness:200}} whileInView={{opacity:1,y:0}} className='border border-border rounded-xs p-3 md:p-7 '>
            <div className='flex flex-row items-center gap-3 '>
                {/* icon */}
                <div className=''>
                    {icon}
                </div>
                {/* content */}
                <div className='flex flex-col text-text-secondary'>
                  <span className='text-2xl'>
                    <CountUp end={number} duration={2} enableScrollSpy scrollSpyOnce/>{suffix}
                  </span>
                  <span className='text-xs'>{label}</span>
                </div>
            </div>
        </motion.div>
    )
}

export default Blog_countUp