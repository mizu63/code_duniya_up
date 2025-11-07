import React, { useState } from 'react'
import Container from "../Layout/Container.jsx"
import Logo from "../assets/Logo.png"
import Listitem from '../Layout/Listitem'
import Flex from "../Layout/Flex.jsx"
import { FaBarsStaggered } from "react-icons/fa6";
function Header() {
  let[show,setshow]=useState(false)
  let handel=()=>{
    setshow(!show)
  }
  return (
    <header className='bg-[#0D1B2A] text-white  pt-[22px] pb-[23px]'>
      <Container>
        <Flex className="justify-between items-center">
          <img className='w-[100px] md:w-auto' src={Logo} alt="Logo" />


          <ul className={`${show ? "block w-full bg-[#0D1B2A] absolute top-20 left-0 p-2.5 ": "hidden"} md:flex  gap-[25px]`}>
            <Listitem item="হোম" />
            <Listitem item="আমাদের কোর্সসমহ" />
            <Listitem item="যোগাযোগ" />
            <Listitem item="ক্যারিয়ার গাইডলাইন" />
          </ul>
           <div className='flex items-center gap-4'>
<button className='bg-[#415A77] px-2 md:px-[58px] cursor-pointer py-1 font-ake text-xl md:text-2xl font-semibold rounded-[10px]'>কোর্স দেখুন</button>
          <FaBarsStaggered onClick={handel} className='md:hidden text-2xl' />
           </div>
          
        </Flex>
      </Container>
    </header>
  )
}

export default Header
