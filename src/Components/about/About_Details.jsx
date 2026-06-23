import React from 'react'
import { motion } from 'framer-motion'
import img1 from "../../assets/contact/v1.png"
import img2 from "../../assets/contact/v2.png"

const data=[
    {
        id:1,
        title:"Our mission",
        subTitle:"Empowering Every Developer",
        des:"We believe every student has potential. Our mission is to provide the right tools, resources, and community to help them build real-world skills, showcase their talent, and achieve their dream career in technology.",
        img:img1,
        style:"md:flex-row md:flex bg-gradient-to-r from-[#010613] via-[#000612] to-black"
    },
     {
        id:2,
        title:"Our vision",
        subTitle:"A World Where Everyone Builds",
        des:"We envision a global community where developers collaborate, innovate, and create solutions that shape a better tomorrow. DevSphere Al is the bridge between learning and real-world impacts.",
        img:img2,
        style:"md:flex-row-reverse bg-gradient-to-r from-[#010613] via-[#000612] to-black"
    }
]


const About_Details = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }} className='outer'>
        <div className='res'>
          <div className='flex flex-col gap-10'>
            {
                data.map((item,ind)=>(
                    <div key={ind} className={`flex flex-col ${item.style} gap-10`}>
                     {/* img */}
                     <div>
                        <img src={item.img} alt="" className='md:min-w-100'/>
                     </div>
                     <div className='space-y-1 md:space-y-3 p-2'>
                      <p className='text-primary capitalize md:text-xl'>{item.title}</p>
                      <h1 className='text-2xl capitalize md:text-3xl lg:text-4xl'>{item.subTitle}</h1>
                      <p className='text-sm text-gray-400 md:text-xl md:font-extralight'>{item.des}</p>
                     </div>
                    </div>
                ))
            }
          </div>
        </div>
    </motion.div>
  )
}

export default About_Details