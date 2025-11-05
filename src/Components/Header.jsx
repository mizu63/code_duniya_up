import React from 'react'
import Container from "../Layout/Container.jsx"
import Logo from "../assets/Logo.png"
import Listitem from '../Layout/Listitem'
import Flex from "../Layout/Flex.jsx"
function Header() {
  return (
    <header className='bg-[#0D1B2A] text-white  pt-[22px] pb-[23px]'>
      <Container>
        <Flex className="justify-between items-center">
          <img src={Logo} alt="Logo" />


          <ul className='flex gap-[25px]'>
            <Listitem item="হোম" />
            <Listitem item="আমাদের কোর্সসমহ" />
            <Listitem item="যোগাযোগ" />
            <Listitem item="ক্যারিয়ার গাইডলাইন" />
          </ul>

          <button className='bg-[#415A77] px-[58px] py-1 font-ake text-2xl font-semibold rounded-[10px]'>কোর্স দেখুন</button>
        </Flex>
      </Container>
    </header>
  )
}

export default Header
