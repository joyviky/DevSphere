import React from 'react'
import {logo} from "../assets/images"
import { IoLogoGithub } from 'react-icons/io'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaTwitch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { LuSend } from 'react-icons/lu'
import {motion} from "framer-motion"


const icons=[
  { id: 1, icon: <IoLogoGithub />, path: "" },
  { id: 2, icon: <FaLinkedin />, path: "" },
  { id: 3, icon: <FaYoutube />, path: "" },
  { id: 4, icon: <FaTwitter />, path: "" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Footer = () => {
  return (
    <div className='bg-black text-white   '>
      <motion.div variants={container} initial="hidden" whileInView="show"  viewport={{ once: true, amount: 0.2 }} className='w-full max-w-7xl mx-auto  flex  justify-between flex-wrap px-10  pt-10 gap-5'>
        <motion.div variants={item} className='w-full  sm:w-50'>
          <img src={logo} alt="" className='w-50'/>
          <p className='text-text-muted mb-5 text-sm'>Empowering developers to showcase, <br /> connect and grow together</p>
          <div className='flex gap-5'>
              {
                icons.map(iconLink=>(
                  <Link key={iconLink.id} to={iconLink.path} className='text-2xl  cursor-pointer hover:text-[#00E4FD] hover:-translate-y-1 hover:scale-125 transition-all duration-300'>
                  {iconLink.icon}
                  </Link>
                ))
              }
          </div>
        </motion.div>
       <FootLink  title="Platform" links={[{id:1,subLink:"Students",path:"/student"},{id:2,subLink:"Blogs",path:"/blog"},{id:3,subLink:"Gallery",path:"/gallery"},{id:4,subLink:"Resume Builder",path:"/resume"},{id:5,subLink:"AI tools",path:"/tools"}]}/>
       <FootLink title="Company" links={[{id:1,subLink:"About us",path:"/about"},{id:2,subLink:"Contact",path:"/contact"},{id:3,subLink:"Privacy Policy",path:"/privacy"},{id:4,subLink:"Terms of Service",path:"/terms"}]}/>
       <FootLink title="Resources" links={[{id:1,subLink:"Documention",path:"/document"},{id:2,subLink:"Guides",path:"/guide"},{id:3,subLink:"Help Center",path:"/help"},{id:4,subLink:"Community",path:"/community"}]}/>
       <motion.div variants={item} >
        <h1 className='font-semibold text-2xl mb-3 mt-5'>Newsletter</h1>
        <p className='text-text-muted text-sm mb-3'>Subscribe to get updates <br /> and new features</p>
        <div className='flex gap-2 items-center'>
          <input type="email" placeholder='Enter your email' className='border-2 outline-0 border-border rounded-sm px-2 py-1'/>
          <div className='bg-[#00e4fd36] rounded-sm'>
            <LuSend className='p-2 text-4xl  cursor-pointer text-primary' />
          </div>
        </div>
       </motion.div>
      </motion.div>
      <p className='text-center py-5 text-sm text-text-muted'>©2026 DevSphere AI. All rights reserverd</p>
      
       
    </div>
  )
}
function FootLink({title,links}){
  return(
    <motion.div variants={item}>
      <h1 className='font-medium text-2xl mb-3 mt-5'>{title}</h1>
      <div className='flex flex-col '>
        {
          links.map(item=>(
            <Link key={item.id} path={item.path} className='text-sm mb-3 cursor-pointer text-text-muted hover:text-text-secondary'>
              {item.subLink}
            </Link>
          ))
        }
      </div>

    </motion.div>
  )
}

export default Footer