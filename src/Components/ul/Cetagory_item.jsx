import React from 'react'
import icon1 from "../../assets/icon1.png"
function Cetagory_item({item}) {
  return (
    <div className='bg-[#1B263B] max-w-[170px] md:max-w-[230px] text-center rounded-[25px] pt-3.5 pb-8'>
  <img className='mx-auto' src={item.icon} alt={item.name} />
  <h3 className='text-2xl font-semibold mt-2.5'>{item.name}</h3>
    </div>
  )
}

export default Cetagory_item
