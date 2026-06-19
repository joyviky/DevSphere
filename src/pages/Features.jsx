import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Hollow from '../Components/features/Hollow'
import Feature_hero from '../Components/features/Feature_hero'
import Feature_content from '../Components/features/Feature_content'
import Feature_footer from '../Components/features/Feature_footer'

const Features = () => {
  return (
    <div>
        <Header/>
        <Hollow/>
        <Feature_hero/>
        <Feature_content/>
        <Feature_footer/>
    </div>
  )
}

export default Features