import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import img1 from '../../assets/flowers/1.png'
import img2 from '../../assets/flowers/2.jpg'
import img3 from '../../assets/flowers/3.jpg'
import img4 from '../../assets/flowers/4.jpg'
import img5 from '../../assets/flowers/5.jpg'
import img6 from '../../assets/flowers/6.jpg'
import img7 from '../../assets/flowers/7.jpg'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'




const Carousal_imgs = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7];
    const [current, setCurrent] = useState(0);
    const nextImage=()=>{
        setCurrent((next)=>(next+1)%images.length);
    }
    const prevImage=()=>{
        setCurrent((prev)=>(prev===0?images.length-1:prev-1));  
    }
   useEffect(()=>{
    const timer=setInterval(()=>{
        setCurrent((cur) => (cur + 1) % images.length);
    },5000);
    return ()=>clearInterval(timer);
   },[images.length])
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }} className='relative w-full  max-w-200  h-100 overflow-hidden mx-auto my-40 '>
                <div className=''>
                        <motion.img key={current} src={images[current]} alt="img" loading="lazy" decoding="async" className='w-full h-full object-cover' initial={{ scale: 1.02 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }} />
                </div>
        <div className='absolute z-1 bottom-0  w-full   flex justify-between  top-1/2 -translate-y-1/2 items-center px-5'>
         <button onClick={prevImage} className='text-3xl text-white/80 bg-white/10 rounded-full h-10 w-10 text-center cursor-pointer hover:bg-white/30 duration-300 grid place-content-center'><IoIosArrowBack/></button>
         <button onClick={nextImage} className='text-3xl text-white/80 bg-white/10 rounded-full h-10 w-10 text-center cursor-pointer hover:bg-white/30 duration-300 grid place-content-center'><IoIosArrowForward/></button>
        </div>
        <div className=' w-full h-5 absolute bottom-5 z-20 flex items-center justify-center gap-2'>
            {
                Array.from({length:images.length},(_,index)=>{
                    return(
                       <button onClick={()=>{setCurrent(index)}} key={index} className='w-8 h-2 bg-[#ffffff2c] cursor-pointer hover:bg-[#ffffff56]'></button>
                    )
                })
            }
                </div>
        </motion.div>
  )
}

export default Carousal_imgs