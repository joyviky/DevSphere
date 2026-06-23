import React from 'react'
import { motion } from 'framer-motion'
import { GitHubCalendar } from 'react-github-calendar'
import { FaShareSquare } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const GithubActivity = ({student}) => {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }} className='bg-black text-white'>
       <div className='w-full max-w-7xl mx-auto p-8'>
        <div className='py-10'>
            <h1 className="text-3xl font-semibold ">Github Activity</h1>
            <p className="text-gray-400 line-clamp-4 text-sm mb-10">
              Total Contributions in the last year
            </p>
            <GitHubCalendar className=''  username={student.githubUsername}/>
            {/* button */}
            <a href={student.github} target="_blank" className='flex items-center  rounded-md gap-4 text-md w-full cursor-pointer justify-center py-2 border border-border mt-5 transition-all duration-300 hover:border-primary hover:shadow-[0_0_15px_rgba(34,211,238,0.6)]'>
                <FaGithub/> view GitHub Profile <FaShareSquare className='text-primary'/>
            </a>
        </div>
       </div>
     </motion.div>
  )
}

export default GithubActivity