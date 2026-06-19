import React from 'react'
import Carousal_imgs from '../Components/gallery/Carousal_imgs'
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Gallery_Hero from '../Components/gallery/Gallery_Hero'
import Gallery_countUp from '../Components/gallery/Gallery_countUp'
import Gallery_Section from '../Components/gallery/Gallery_Section'

const Gallery = () => {
  return (
    <div>
       <Header/>
       <Gallery_Hero/>
       <Gallery_countUp/>
       <Gallery_Section/>
       <Footer/>
    </div>
  )
}

export default Gallery