import React from 'react'
import Container from '../Layout/Container'
import Flex from '../Layout/Flex'
import Guru from "../assets/Guru.png"
import Listitem from '../Layout/Listitem'

function About() {
  return (
    <section className='pb-[118px]'>
        <Container>
            <Flex className="flex-col md:flex-row gap-[35px]">
                <div className=' w-full md:w-1/2 '>
                <img src={Guru } alt="" />
                </div>
                  <div className=' w-full md:w-1/2 '>
                  <h1 className=' text-2xl md:text-[36px] font-ake font-bold  text-black'>আমাদের ক্লাসের বিশেষত্ব</h1>
                  <ul className="flex flex-col gap-[9px] mt-7 md:mt-[55px] list-disc list-inside ">
                    <Listitem className="font-medium  text-black" item="সপ্তাহে ২ - ৩ দিন ক্লাস"/>
                     <Listitem className="font-medium  text-black" item="অনলাইন / অফলাইন ক্লাস প্রতিটি কোর্সে"/>
                      <Listitem className="font-medium  text-black" item="মনোরম ক্লাস রুম"/>
                       <Listitem className="font-medium  text-black" item="অনলাইন ২৪/৭ সাপোর্ট"/>
                        <Listitem className="font-medium  text-black" item="অত্যাধুনিক মনিটর এবং প্রজেক্টর এর সুবিধা"/>
                  </ul>
                  </div>
            </Flex>
        </Container>
    </section>
  )
}

export default About
