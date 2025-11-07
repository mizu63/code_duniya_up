import React from 'react'

function Button({className,bnt,onClick}) {
  return (
   <button onClick={onClick} className={`text-[16px] md:text-[20px] text-white cursor-pointer px-3 md:px-[19px] bg-[#0D1B2A] rounded-[15px] font-ake font-semibold ${className}`}>{bnt}</button>
  )
}

export default Button
