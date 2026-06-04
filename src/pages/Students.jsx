import React from 'react'
import StudentHero from '../Components/students/StudentHero'
import Countup from '../Components/home/Countup'
import StudentCards from '../Components/students/StudentCards'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Carousel from '../Components/students/Carousel'

const Students = () => {
  return (
    <div>
        <Header/>
        <StudentHero/>
        <Countup/>
        <Carousel/>
        <StudentCards/>
        <Footer/>
    </div>
  )
}

export default Students