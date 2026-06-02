import React from 'react'

const Button = (props) => {
  return (
    <button className={`${props.style}  cursor-pointer px-5 mx-2 rounded-md py-1`}>
        {props.name}{props.icon}
    </button>
  )
}

export default Button