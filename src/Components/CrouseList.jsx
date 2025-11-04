import React, { useState } from 'react'
import Container from '../Layout/Container'
import Titile from './ul/Titile'
import Crouse_card from './ul/Crouse_card'
import List1 from "../assets/List1.png"
import Flex from '../Layout/Flex'
import Ux from "../assets/Ux.png"
import Vx from "../assets/Vx.png"
import Button from './ul/Button'
function CrouseList() {
  
 let [crouseCount,setcrouseCount]=useState(3)


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
        },
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
        },
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
            name:"UI/UX Design",
            dep:"Graphics & Multimedia",
            text:"Rating | 450 Reviews",
            price:"৳ 1,20000 BDT",
           thm:Ux,
            bah:"ডিসকাউন্ট",
             mizu:"৩০০০ স্টুডেন্ট"
        }
    ]

    let hendhael=()=>{
    if(crouseCount===3){
       setcrouseCount(Crouselist.length)
    }else{
      setcrouseCount(3);
    }
    }


   let Fainal=Crouselist.slice(0,crouseCount)
  return (
    <div className='mt-[170px] '>
      <Container>
        <Titile main_title="কেন আমরাই সেরা"
        sub_title="কেন আপনি আমাদের লার্নার হবেন"/>
<Flex className="justify-between mt-[62px] pb-[45px] gap-2 flex-wrap">
     {
   Fainal.map((itme)=>(
    <Crouse_card CrouseList={itme}/>
   )) 
 }
</Flex>
        <Button onClick={hendhael} className="px-[57px] py-1 font-ake font-bold text-black mt-3 block mx-auto"
        
          bnt={crouseCount === 3 ? "আরও কোর্স দেখুন" : "কম দেখুন"}
        />
      </Container>
    </div>
  )
}

export default CrouseList
