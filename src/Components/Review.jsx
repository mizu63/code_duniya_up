import React from 'react'
import Card from './ul/Card'
import Flex from '../Layout/Flex'
import Container from '../Layout/Container'



function Review() {

    let Tcard = [
        {
            parsan: "৯০ % ",
            tilte: "সফলতার হার",
            jim: `এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবেএখানে কিছু টেক্সট  বাসবে`
        },
        {
            parsan: "১০,০০০ + ",
            tilte: "ক্যারিয়ার প্লেসমেন্ট",
            jim: `এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
                  বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট 
                  বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
                 বাসবেএখানে কিছু টেক্সট  বাসবে`
        },
        {
            parsan: "১০০০০০ + ",
            tilte: "স্টুডেন্ট এর পছন্দ",
            jim: `এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবেএখানে কিছু টেক্সট  বাসবে`
        }
    ]



    return (
        <section className='mt-[97px]'>
          <Container>
            <h1 className='font-bold font-ake  text-[36px] text-center'>কেন আমরাই সেরা</h1>
            <h4 className='font-medium font-ake  text-[20px] text-center'>কেন আপনি আমাদের লার্নার হবেন</h4>
             <Flex className="justify-between gap-4 mt-[55px]">
           
                {
                Tcard.map((item) => (
                    <Card mizu={item} />
                ))
            }
            

           </Flex>
          </Container>

        </section>
    )
}

export default Review
