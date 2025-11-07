import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import Mizu from "../assets/Mizu.png"

function Banner() {
    return (
        <section className='bg-[#0D1B2A] text-white pt-10 md:pt-[81px] pb-[172px] '>
            <Container>
                <Flex className="flex-col gap-y-3.5 md:gap-y-0  md:flex-row">
                    <div className=' w-full md:w-1/2'>
                        <h2 className=' text-2xl md:text-[50px] font-ake font-bold max-w-[435px] '>দেশের সর্ব বৃহৎ
                            আইটি ট্রেনিং প্লাটফর্ম </h2>
                        <p className='md:text-[20px] max-w-[457px] mt-4  font-normal font-ake'>আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে
                            আইটি এক্সপার্ট হিসেবে গড়ে তুলুন</p>
                             <button  className='bg-[#415A77] mt-4 md:mt-[41px] cursor-pointer px-3 md:px-[58px] py-1 font-ake text-lg md:text-2xl font-semibold rounded-[10px]'>কোর্স দেখুন</button>
                    </div>
                    <div className='w-full md:w-1/2'>
                        <img className='rounded-2xl' src={Mizu} alt="" />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Banner
