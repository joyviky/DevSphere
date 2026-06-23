import React from 'react'
import About_Hero from '../Components/about/About_Hero'
import About_Details from '../Components/about/About_Details'
import About_value from '../Components/about/About_value'
import About_offer from '../Components/about/About_offer'
import About_mission from '../Components/about/About_mission'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const About = () => {
  return (
    <div>
        <Header/>
        <About_Hero/>
        <About_Details/>
        <About_value/>
        <About_offer/>
        <About_mission/>
        <Footer/>
    </div>
  )
}

export default About