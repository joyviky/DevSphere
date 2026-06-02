import React from 'react'
import { FaUserFriends,FaUsers,FaPenNib,FaRobot,FaRocket,FaChartLine,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    title: "Build Your Profile",
    description:
      "Create a stunning developer profile and showcase your skills, projects & achievements.",
    icon: FaUserFriends,
    color:
      "bg-gradient-to-br from-[#A855F7]/20 to-[#7C3AED]/20 text-[#C084FC]",
  },

  {
    id: 2,
    title: "Share & Connect",
    description:
      "Connect with peers, collaborate on projects and grow your developer network.",
    icon: FaUsers,
    color:
      "bg-gradient-to-br from-[#3B82F6]/20 to-[#2563EB]/20 text-[#60A5FA]",
  },

  {
    id: 3,
    title: "Write & Inspire",
    description:
      "Write blogs, share knowledge and inspire the next generation of developers.",
    icon: FaPenNib,
    color:
      "bg-gradient-to-br from-[#22C55E]/20 to-[#16A34A]/20 text-[#4ADE80]",
  },

  {
    id: 4,
    title: "AI Powered Tools",
    description:
      "Use AI tools like resume builder, analyzer and interview simulator.",
    icon: FaRobot,
    color:
      "bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/20 text-[#FBBF24]",
  },

  {
    id: 5,
    title: "Showcase & Grow",
    description:
      "Showcase your work, get noticed by recruiters and unlock opportunities.",
    icon: FaRocket,
    color:
      "bg-gradient-to-br from-[#EC4899]/20 to-[#BE185D]/20 text-[#F472B6]",
  },

  {
    id: 6,
    title: "Track & Improve",
    description:
      "Track your progress, skills and continuously improve yourself with analytics.",
    icon: FaChartLine,
    color:
      "bg-gradient-to-br from-[#06B6D4]/20 to-[#0891B2]/20 text-[#22D3EE]",
  },
];

const Career = () => {
  return (
    <div className='bg-gradient-to-br from-black via-[#050816] to-[#0A1022] py-10 '>
        <div className=' w-full max-w-7xl mx-auto text-white'>
           <p className='uppercase font-semibold text-primary text-center'>Why devsphere Ai?</p>
           <h1 className='text-center text-4xl mt-3 font-extralight capitalize mb-20'>Everything You need <br /> to build your <span className='gradient-text'>Career</span></h1>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
             {
                features.map(item=>(
                    <div className='flex items-start mx-auto gap-4 rounded-2xl text-text-secondary border-2 border-border max-w-90 p-5 hover:shadow-[0_15px_40px_rgba(34,211,238,0.12)] hover:border-cyan-400/20 hover:bg-white/[0.02] transition-all duration-300 hover:scale-105'>
                        {/* icon */}
                        <div>
                            <item.icon className={`${item.color} text-5xl p-2 rounded-lg `}/>
                        </div>
                        {/* content */}
                        <div>
                            <h2 className='text-white font-semibold'>{item.title}</h2>
                            <h3 className='text-text-muted text-sm'>{item.description}</h3>
                        </div>
                    </div>
                ))
             }
           </div>
        </div>
    </div>
  )
}

export default Career