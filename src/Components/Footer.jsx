import React from 'react'
import Container from '../Layout/Container'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <section className='bg-[#0D1B2A] text-white'>
      <Container>
        <h1 className=' text-4xl md:text-[80px] font-bold font-ake text-center'>কোড দুনিয়া</h1>
        <p className=' text-2xl md:text-[36px] font-normal font-ake text-center mt-1'>দেশের সর্ববৃহৎ আইটি ট্রেনিং প্লাটফর্ম</p>
        <div className='flex items-center justify-center gap-6 mt-2 md:mt-4'>

          <FaFacebookSquare className="text-4xl text-white" />
          <FaLinkedinIn className="text-4xl text-white" />
          <FaYoutube className="text-4xl text-white" />
          <FaXTwitter className="text-4xl text-white" />

        </div>
        <div className='flex justify-between mt-9 md:mt-[122px] pb-2 md:pb-4'>
          <p className=' text-lg md:text-[20px] font-ake font-normal'>২০২৪ কপিরাইট  | মাহমুদ হাসান রামীম | সর্বসত্ত্ব সংরক্ষিত</p>
          <p className=' text-lg md:text-[20px] font-ake font-normal'>প্রাইভেসি পলিসি</p>
        </div>
      </Container>
    </section>
  )
}

export default Footer
