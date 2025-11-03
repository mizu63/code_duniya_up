import React from 'react'
import Button from './Button'
import Flex from '../../Layout/Flex'

function Crouse_card({ CrouseList }) {
    return (
        <div className=''>
            <img src={CrouseList.thm} alt="" />
            <div className='bg-[#415A77] p-4 rounded-b-[15px] text-[#FFFFFF]'>
                <Flex className="justify-between">
                    <h4 className='text-[15px] font-medium '>{CrouseList.dep}</h4>
                <h5 className='text-[15px] font-ake font-normal'>{CrouseList.mizu}</h5>
                </Flex>
                
                <h2 className='text-2xl font-bold mt-1 '>{CrouseList.name}</h2>
            
                    <Flex className="justify-between mt-3">
                        <div >
                        <p className='text-[13px] font-normal '>{CrouseList.text}</p>
                        <h3 className='text-2xl font-extrabold mt-1'>{CrouseList.price}</h3>
                    </div>
                    <Button bnt={CrouseList.bah} />
                    </Flex>
           
            </div>
        </div>
    )
}

export default Crouse_card
