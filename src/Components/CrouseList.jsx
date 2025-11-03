import React from 'react'
import Container from '../Layout/Container'
import Titile from './ul/Titile'
import Crouse_card from './ul/Crouse_card'
import List1 from "../assets/List1.png"
import Flex from '../Layout/Flex'
import Ux from "../assets/Ux.png"
import Vx from "../assets/Vx.png"
function CrouseList() {
    let Crouselist=[
        {
            name:"MERN Stack Development",
            dep:"Web and Software",
            text:"Rating | 450 Reviews",
            price:"৳  1,20000 BDT",
           thm:List1,
           bah:"ডিসকাউন্ট",
            mizu:"৩০০০ স্টুডেন্ট"
        },
         {
            name:"UI/UX Design",
            dep:"Graphics & Multimedia",
            text:"Rating | 450 Reviews",
            price:"৳ 1,20000 BDT",
           thm:Ux,
            bah:"ডিসকাউন্ট",
             mizu:"৩০০০ স্টুডেন্ট"
        },
         {
            name:"Professional Video Editing",
            dep:"Films & Media",
            text:"Rating | 450 Reviews",
            price:"৳  1,20000 BDT",
           thm:Vx,
            bah:"ডিসকাউন্ট",
            mizu:"৩০০০ স্টুডেন্ট"
        }
    ]
  return (
    <div className='mt-[170px] '>
      <Container>
        <Titile main_title="কেন আমরাই সেরা"
        sub_title="কেন আপনি আমাদের লার্নার হবেন"/>
<Flex className="justify-between mt-[62px] pb-[45px] ">
     {
   Crouselist.map((itme)=>(
    <Crouse_card CrouseList={itme}/>
   )) 
 }
</Flex>
        
      </Container>
    </div>
  )
}

export default CrouseList
