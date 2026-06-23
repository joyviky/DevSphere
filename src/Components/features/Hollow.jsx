import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import Loading from '../Loading';
import MarqueeLib from "react-fast-marquee";

const Marquee = MarqueeLib.default || MarqueeLib;


const marqueeDatas=[
  {
    id:1,
    content:"🚀 Showcase Your Skills"
  },
  {
    id:2,
    content:"💻 Build Amazing Projects "
  },
  {
    id:3,
    content:"✍️ Share Technical Blogs"
  },
  {
    id:4,
    content:"🏆 Highlight Achievements "
  },
  {
    id:5,
    content:"🤝 Connect With Students"
  },
  {
    id:6,
    content:"🤖 Powered by AI "
  },
  {
    id:7,
    content:" 🌟 Building the Future Together "
  },

]
const Hollow = () => {
  const [loading,setLoading]=useState(true);
  return (
    
    <motion.main initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="hidden lg:block relative w-full h-screen overflow-hidden">
      {loading && <Loading/>}
     <Spline 
        className="absolute left-0 top-0 w-full pointer-events-auto"
        scene="https://prod.spline.design/x9hseSxmgu95yzfZ/scene.splinecode" 
        onLoad={()=>setLoading(false)}
      />
      <div className='group select-none bg-black w-full h-15 absolute bottom-0 text-white'>
        <Marquee speed={50}  pauseOnHover>
          {
            marqueeDatas.map((cnt,ind)=>(
              <span key={ind} className='inline-block px-10  font-medium duration-300 text-[#006B54] group-hover:text-gray-600  hover:scale-110 hover:text-[#006B54] '>
                {cnt.content}
              </span>
            ))
          }
        </Marquee>
      </div>
    </motion.main>
  )
}

export default Hollow