import React from 'react'
import CountUpLib from 'react-countup'
const CountUp = CountUpLib.default || CountUpLib
import { FaUsers, FaFolder, FaFileAlt, FaUniversity } from "react-icons/fa";


const details = [
  {
    id: 1,
    number: 50,
    label: "Students",
    icon: <FaUsers className='bg-violet-400/10 bg-gradient-to-br from-[#00F5FF]/20 via-[#4F46E5]/20 to-[#A855F7]/20 text-[#00F5FF] text-5xl p-2 rounded-sm'/>,
    
  },
  {
    id: 2,
    number: 120,
    label: "Projects",
    icon: <FaFolder className=' bg-gradient-to-br from-[#34D399]/20 via-[#14B8A6]/20 to-[#06B6D4]/20 text-[#34D399] text-5xl p-2 rounded-sm'/>
  },
  {
    id: 3,
    number: 35,
    label: "Blogs",
    icon: <FaFileAlt className=' bg-gradient-to-br from-[#F472B6]/20 via-[#D946EF]/20 to-[#8B5CF6]/20 text-[#F472B6] text-5xl p-2 rounded-sm'/>
  },
  {
  id: 4,
  number: 10,
  label: "Colleges",
  icon: <FaUniversity className="text-amber-200 bg-gradient-to-br from-[#FDE68A]/20 via-[#F59E0B]/20 to-[#D97706]/20 text-[#FBBF24] text-5xl p-2 rounded-sm" />
}
];

const Countup = () => {
  return (
    <div className='w-full md:h-40 bg-black  border-b border-border'>
      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 px-8 mb-5 md:mb-0'>
       {
        details.map(card=>(
            <CountupCard key={card.id} number={card.number} label={card.label} icon={card.icon}/>
        ))
       }
      </div>
    </div>
  )
}
function CountupCard({number,label,icon}){
    return(
        <div className='border border-border rounded-xs p-3 md:p-7 '>
            <div className='flex flex-row items-center gap-3 '>
                {/* icon */}
                <div className=''>
                    {icon}
                </div>
                {/* content */}
                <div className='flex flex-col text-text-secondary'>
                  <span className='text-4xl'>
                    <CountUp end={number} duration={2} enableScrollSpy scrollSpyOnce/>+
                  </span>
                  <span className='text-sm'>{label}</span>
                </div>
            </div>
        </div>
    )
}

export default Countup