import React, { useState } from 'react'
import Button from './ul/Button'
import Container from '../Layout/Container'
import Flex from "../Layout/Flex"
import Mishu from "../assets/Mishu.png"
import Listitem from '../Layout/Listitem'


function Information() {
  let [mizu, setmizu]=useState(false)
    let handel=()=>{
        setmizu(!mizu)
    }
    return (
        <section className='bg-[#0D1B2A] text-white font-ake p-3'>
            <Container>
                <h1 className=' text-4xl md:text-[80px] font-ake font-bold text-center'>ভর্তি চলছে</h1>
                <p className='text-lg md:text-[20px] font-ake font-normal md:font-bold text-center'>আমাদের অনলাইন অথবা অফলাইন কোর্সে এনরোল করে ফেলুন</p>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 mt-4 md:mt-[35px]">
                    <Button className=" text-[13px] md:text-[20px] font-ake font-bold border border-white" bnt="সকল কোর্স দেখুন" />
                    <Button onClick={handel} className="text-[20px] font-ake font-bold border border-white" bnt="আমাদের সেমিনারে যোগ দিন" />
                </div>

                <Flex className={` ${mizu ? "block" :"hidden"} md:flex flex-col md:flex-row justify-center items-center gap-2 md:gap-1 mt-6 md:mt-[90px] pb-[50px]`}>
                   <div className='w-full md:w-1/4'>
                   <h1 className='text-2xl font-ake font-normal md:font-semibold mb-1 md:mb-5'>আমাদের ঠিকানা</h1>
                   <ul className='flex flex-col gap-1 md:gap-3'>
                        <Listitem className="text-[16px] font-normal" item="২৮ / ২, মেহের প্লাজা, ধানমন্ডি, ঢাকা"/>
                         <Listitem className="text-[16px] font-normal" item="+৮৮ ০১৭১৫৫৫৭৮৯৬"/>
                          <Listitem className="text-[16px] font-normal" item="info@codeduniya.com"/>
                           
                     </ul>
                   </div>
                  <div className='w-full md:w-1/4'>
                     <h1 className='text-2xl font-ake font-normal md:font-semibold mb-1 md:mb-5'>আমাদের ঠিকানা</h1>

                     <ul className='flex flex-col gap-1 md:gap-3'>
                        <Listitem className="text-[16px] font-normal" item="আমাদের কোর্স"/>
                         <Listitem className="text-[16px] font-normal" item="মেন্টর"/>
                          <Listitem className="text-[16px] font-normal" item="আমাদের ব্লগ"/>
                           <Listitem className="text-[16px] font-normal" item="প্রাইভেসি পলিসি"/>
                            <Listitem className="text-[16px] font-normal" item="আমাদের সেমিনার"/>
                     </ul>

                    </div>
                   <div className='w-full md:w-1/4'>
                      <h1 className='text-2xl font-ake font-normal md:font-semibold mb-1 md:mb-5'>আমাদের ঠিকানা</h1>

                       <ul className='flex flex-col gap-1 md:gap-3'>
                        <Listitem className="text-[16px] font-normal" item="ওয়েব ডেভেলপমেন্ট"/>
                         <Listitem className="text-[16px] font-normal" item="গ্রাফিক্স ডিজাইন"/>
                          <Listitem className="text-[16px] font-normal" item="অ্যাপ ডেভেলপমেন্ট"/>
                           <Listitem className="text-[16px] font-normal" item="সাইবার সিকিউরিটি"/>
                            <Listitem className="text-[16px] font-normal" item="ভিডিও এডিটিং"/>
                     </ul>
                     </div>
                      <div className='w-full md:w-1/4 flex justify-center'>
                <img className='rounded-2xl ' src={Mishu} alt="logo" />

                </div>







                </Flex>

            </Container>
        </section>
    )
}

export default Information
