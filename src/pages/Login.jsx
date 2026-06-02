import React from 'react'
import github from '../assets/github.png'
import google from '../assets/google.jpg'
import linkedin from '../assets/linkedin.png'
import person from '../assets/person.png'

const Login = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#06061c] flex items-center justify-center gap-10 px-6">
      
    
      <div className="text-white max-w-sm ">
        <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-gray-300 ">
          Login to continue your <br /> developer journey
        </p>
        <img src={person} alt="person" className="w-64" />
      </div>

      
      <div className="bg-[#111827] w-full max-w-md rounded-2xl p-8 shadow-xl">
        
        <h2 className="text-white text-xl text-center mb-4">
          Login to Your Account
        </h2>

        <label className="text-white">Email Address</label>
        <input
          type="text"
          placeholder="Enter your email"
          className="mt-2 w-full px-4 py-2 bg-transparent border border-gray-700 text-white focus:outline-none focus:border-sky-500"
        />

        <label className="text-white block mt-4">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="mt-2 w-full px-4 py-2 bg-transparent border border-gray-700 text-white focus:outline-none focus:border-sky-500"
        />

        <div className="text-right mt-2">
          <a className="text-blue-400 text-sm cursor-pointer">
            Forgot Password?
          </a>
        </div>

        <button className="bg-blue-400 w-full rounded-xl py-2 mt-6 font-semibold text-black">
          Login
        </button>

        <p className="text-center text-gray-400 my-5">
          — or continue with —
        </p>

        <div className="flex justify-center gap-6">
          <img src={github} className="w-6" />
          <img src={google} className="w-6" />
          <img src={linkedin} className="w-6" />
        </div>

        <p className="text-white text-center mt-5">
          Don’t have an account?
          <span className="text-blue-500 cursor-pointer ml-1">
            Register
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login