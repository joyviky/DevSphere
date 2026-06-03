import React from 'react'
import StudentHero from '../Components/students/StudentHero'
import Countup from '../Components/home/Countup'
import StudentCards from '../Components/students/StudentCards'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Students = () => {
  return (
    <div>
        <Header/>
        <StudentHero/>
        <Countup/>
        <StudentCards/>
        <Footer/>
    </div>
  )
}

export default Students