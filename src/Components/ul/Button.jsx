import React from 'react'

function Button({className,bnt}) {
  return (
   <button className={`text-[20px] text-white cursor-pointer px-[19px] bg-[#0D1B2A] rounded-[15px] font-ake font-semibold ${className}`}>{bnt}</button>
  )
}

export default Button
