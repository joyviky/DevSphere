import React from 'react'
import { motion } from 'framer-motion'

const Button = (props) => {
  return (
    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ type: 'spring', stiffness: 300 }} className={`${props.style}  cursor-pointer px-5 mx-2 rounded-md py-1`}>
        {props.name}{props.icon}
    </motion.button>
  )
}

export default Button