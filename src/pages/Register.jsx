import React from 'react'
import Register_hero from '../Components/authentication/Register_hero'
import Countup from '../Components/home/Countup'
import Register_Form from '../Components/authentication/Register_Form'
import DeveloperSection from '../Components/authentication/DeveloperSection'
import Footer from '../Components/Footer'
const Register = () => {
  return (
    <div>
      <Register_hero/>
      <Countup/>
      <Register_Form/>
      <DeveloperSection/>
      <Footer/>
    </div>
  )
}

export default Register