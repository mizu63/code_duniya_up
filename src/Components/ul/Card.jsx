import React from 'react'

function Card({ mizu }) {
    return (
        <div className='bg-[#1B263B] py-9 px-7 rounded-[15px] text-white pb-[86px]'>
            <h1 className='font-semibold font-ake text-[36px]'>{mizu.parsan}</h1>
            <h2 className='font-semibold font-ake text-[36px]'>{mizu.tilte}</h2>
            <p className='font-normal font-ake text-[16px] mt-[19px] max-w-[178]'>{mizu.jim}</p>
        </div> 
    )
}

export default Card
