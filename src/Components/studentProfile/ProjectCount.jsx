import React from 'react'
import { motion } from 'framer-motion'
import CountUpLib from 'react-countup'
const CountUp = CountUpLib.default || CountUpLib

const ProjectCount = ({
  project,
  blogs,
  repos,
  followers,
  following,
}) => {
  const comDetails = [
    { id: 1, number: project, title: "Projects" },
    { id: 2, number: blogs, title: "Blogs" },
    { id: 3, number: repos, title: "GitHub Repos" },
    { id: 4, number: followers, title: "Followers" },
    { id: 5, number: following, title: "Following" },
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className="bg-black w-full  text-white ">
      <div className="w-full max-w-7xl mx-auto bg-[#0d0d1c] p-5 rounded-2xl">
        <p className="uppercase mb-10 font-semibold text-primary text-center">
          Profile Overview
        </p>
        <div className="flex justify-evenly">
          {
            comDetails.map((card)=>(
                <div key={card.id} className='-mt-5 sm:-mt-0 flex flex-col text-center'>
                  <span className='text-2xl md:text-4xl'>
                    <CountUp end={card.number} duration={2} enableScrollSpy scrollSpyOnce/>
                  </span>
                  <span className='text-xs md:text-sm text-text-secondary'>{card.title}</span>
                </div>
            ))
          }
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCount