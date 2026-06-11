import React from 'react'
import Register_hero from '../Components/authentication/Register_hero'

import DeveloperSection from '../Components/authentication/DeveloperSection'
import Footer from '../Components/Footer'
import Login_Form from '../Components/authentication/Login_Form'
import Countup from '../Components/home/Countup'

const Login = () => {
  return (
    <div>
      <Register_hero/>
      <Countup/>
      <Login_Form/>
      <DeveloperSection/>
      <Footer/>
    </div>
  )
}

export default Login