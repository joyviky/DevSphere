import React, { useState } from 'react'
import Spline from '@splinetool/react-spline'
import Loading from '../Loading';

const Hollow = () => {
  const [loading,setLoading]=useState(true);
  return (
    
    <main className="hidden lg:block relative w-full h-screen overflow-hidden">
      {loading && <Loading/>}
     <Spline 
        className="absolute left-0 top-0 w-full pointer-events-auto"
        scene="https://prod.spline.design/x9hseSxmgu95yzfZ/scene.splinecode" 
        onLoad={()=>setLoading(false)}
      />
      <div className='bg-black w-full h-15 absolute bottom-0'></div>
    </main>
  )
}

export default Hollow