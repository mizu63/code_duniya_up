import React from 'react'

function Titile({main_title,sub_title}) {
  return (
    <div className='text-center'>
       <h2 className='text-[36px]  font-ake font-bold text-[##000000]'>{main_title}</h2>
       <p className='text-[20px]  font-ake font-medium mt-[10px text-[##000000]'>{sub_title}</p>
    </div>
  )
}

export default Titile
