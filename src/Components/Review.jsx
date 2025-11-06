import React from 'react'
import Card from './ul/Card'
import Container from '../Layout/Container'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";

function Review() {

  const Tcard = [
    {
      parsan: "৯০ % ",
      tilte: "সফলতার হার",
      jim: `এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে`
    },
    {
      parsan: "১০,০০০ + ",
      tilte: "ক্যারিয়ার প্লেসমেন্ট",
      jim: `এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে`
    },
    {
      parsan: "১০০০০০ + ",
      tilte: "স্টুডেন্ট এর পছন্দ",
      jim: `এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে`
    },
    {
      parsan: "১০০০০০ + ",
      tilte: "স্টুডেন্ট এর পছন্দ",
      jim: `এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট 
বাসবে এখানে কিছু টেক্সট  বাসবে`
    }
  ];

  const ArrowStyle = {
    position: "absolute",
  bottom: "-60px",
    zIndex: 2,
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    background: "#0D1B2A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  function SampleNextArrow({ onClick }) {
    return (
      <div style={{ ...ArrowStyle, right: "45%" }} onClick={onClick}>
        <GrCaretNext className='text-2xl' color="white" />
      </div>
    );
  }

  function SamplePrevArrow({ onClick }) {
    return (
      <div style={{ ...ArrowStyle, left: "45%" }} onClick={onClick}>
        <GrCaretPrevious className='text-2xl' color="white" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <section className='mt-[97px] pb-[204px]'>
      <Container>
        <h1 className='font-bold font-ake text-[36px] text-center'>কেন আমরাই সেরা</h1>
        <h4 className='font-medium font-ake text-[20px] text-center'>
          কেন আপনি আমাদের লার্নার হবেন
        </h4>
        <div className='mt-[55px]'>
          <Slider {...settings}>
            {Tcard.map((item) => (
              <div className="px-3">
                <Card mizu={item} />
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default Review;
