import React from 'react'
import Blog_Hero from '../Components/blogs/Blog_Hero'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Blog_countUp from '../Components/blogs/Blog_countUp'
import Blog_Section from '../Components/blogs/Blog_Section'

const Blogs = () => {
  return (
    <div>
        <Header/>
        <Blog_Hero/>
        <Blog_countUp/>
        <Blog_Section/>
        <Footer/>
    </div>
  )
}

export default Blogs