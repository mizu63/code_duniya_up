import React, { useState } from 'react'
import Importvideo from '../Components/ul/Importvideo'
import Container from '../Layout/Container'
import Button from './ul/Button'
function Sectionvideo() {
    
     let [overlet,setoverlet]=useState(4)
    let Yvideo=[
        {
            video:"https://www.youtube.com/embed/ulzVLxFnYa8"
        },
        {
            video:"https://www.youtube.com/embed/eILUmCJhl64"
        },
        {
            video:"https://www.youtube.com/embed/LnX7JIY7hzc"
        },
        {
            video:"https://www.youtube.com/embed/0AT_6Qz_m9U"
        },
        {
            video:"https://www.youtube.com/embed/-3lL8oyev9w"
        },
         {
            video:"https://www.youtube.com/embed/ulzVLxFnYa8"
        }
       
    ]

    let final=Yvideo.slice(0,overlet)
   let handel=()=>{
    if(overlet===4){
        setoverlet(Yvideo.length)
    }else{
        setoverlet(4)
    }
   }

  return (
    <section className='pb-4 md:pb-[90px]'>
        <Container>
            <h1 className=' text-2xl md:text-[36px] font-ake font-bold text-black text-center'>আমাদের সফলতার গল্পগুলো</h1>
            <h3 className='text-lg md:text-[20px] font-ake font-medium text-black text-center mb-4 md:mb-[90px]'>আমাদের হাতে তৈরি হওয়া প্রতিটি নক্ষত্র</h3>
      <div className='w-full flex flex-wrap justify-center gap-4 md:gap-6'>
        { final.map((item) => (
        <Importvideo jim={item} />
      ))}
      </div>

      <div className='mt-5 md:mt-[58px]'>
         <Button onClick={handel} className=" px-2 md:px-[83px] py-1 font-ake text-2xl font-bold text-black  block mx-auto" bnt={overlet===4? "আরও দেখুন":"কম দেখুন"}/>
      </div>
        </Container>
    </section>
  )
}

export default Sectionvideo
