import React from 'react'
import { blog_hero } from '../../assets/images'
import { FaSearch } from 'react-icons/fa'
const Blog_Hero = () => {
  return (
    <div className="w-full pb-10 lg:pb-0 min-h-160 overflow-hidden bg-black flex flex-col-reverse lg:flex-row items-center">
          {/* content */}
          <div className="text-white  pl-8 lg:pt-20 lg:pl-30 max-wl-xl place-self-start">
            <span className="inline-block text-primary  py-1 capitalize">
              blogs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tighter py-4">
              Explore Learn.
              <span className="gradient-text">Share Knowledge.</span>
            </h1>
            <p className="text-text-secondary max-w-md  text-md md:text-lg md:max-w-lg ">
             Explore tutorials, guides, and insights from talented developers. Stay update with the lates in teach and development.
            </p>
            <div className="my-5 flex items-center gap-2 cursor-pointer bg-[#0f0f25] max-w-110 px-2 rounded-sm">
              <FaSearch/>
              <input type="text" name="" className="w-full border-0 outline-0 max-w-100 py-2" id="" placeholder="Search blogs by title, tags in tech and development..."/>
            </div>
          </div>
          {/* image */}
          <img src={blog_hero} className="w-full lg:w-190 " alt="" />
        </div>
  )
}

export default Blog_Hero