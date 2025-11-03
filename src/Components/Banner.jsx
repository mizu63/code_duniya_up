import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import Mizu from "../assets/Mizu.png"

function Banner() {
    return (
        <section className='bg-[#0D1B2A] text-white pt-[81px] pb-[172px] '>
            <Container>
                <Flex>
                    <div className='w-1/2'>
                        <h2 className='text-[50px] font-ake font-bold max-w-[435px] '>দেশের সর্ব বৃহৎ
                            আইটি ট্রেনিং প্লাটফর্ম </h2>
                        <p className='text-[20px] max-w-[457px] mt-4  font-normal font-ake'>আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে
                            আইটি এক্সপার্ট হিসেবে গড়ে তুলুন</p>
                             <button className='bg-[#415A77] mt-[41px] cursor-pointer px-[58px] py-1 font-ake text-2xl font-semibold rounded-[10px]'>কোর্স দেখুন</button>
                    </div>
                    <div className='w-1/2'>
                        <img className='rounded-2xl' src={Mizu} alt="" />
                    </div>
                </Flex>
            </Container>
        </section>
    )
}

export default Banner
