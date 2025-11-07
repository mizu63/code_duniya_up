import React from 'react'

function Listitem({item,className}) {
  return (
  <li className={`text-[#FFFFFF] text-lg md:text-2xl font-semibold font-ake ${className}`}>{item}</li>
  )
}

export default Listitem
