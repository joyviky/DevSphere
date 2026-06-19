import React from 'react'
import { earth_bg } from "../../assets/images"

const Feature_footer = () => {
  return (
    <div>
      <div className="relative h-72 sm:h-96 md:h-[500px] w-full overflow-hidden">
        <img 
          src={earth_bg} 
          alt="Earth background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#000A0A]/60 pointer-events-none" ></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-4xl px-4 text-center text-white flex flex-col items-center gap-3"> 
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Ready to <br /> 
            <span className="bg-gradient-to-r from-emerald-500 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
  build your next big idea
</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto">
            Join thousands of developers building the future with DevSphere
          </p>

          <div className="mt-2 flex flex-col items-center gap-2">
            <button className="px-6 py-3 bg-[#20DBB5] hover:bg-[#1cbf9e] cursor-pointer text-black font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base md:text-md shadow-lg shadow-cyan-500/20 active:scale-95 transform">
              Get Started for free
            </button>
            <p className="text-xs text-gray-4xl">No credit card required</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Feature_footer