import React from 'react'
import Hero from '../Components/home/Hero'
import Header from '../Components/Header'
import Countup from '../Components/home/Countup'
import Career from '../Components/home/Career'
import Platform from '../Components/home/Platform'
import Community from '../Components/home/Community'
import Banner from '../Components/home/Banner'
import Footer from "../Components/Footer"
const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Countup/>
        <Career/>
        <Platform/>
        <Community/>
        <Banner/>
        <Footer/>
         
    </div>
  )
}

export default Home