import React from 'react'
import Container from '../Layout/Container'
import Catagory_item from "../Components/ul/Cetagory_item.jsx"
import icon1 from "../assets/icon1.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";

import "slick-carousel/slick/slick-theme.css"
import Vector from "../assets/Vector.png"
import Jim from "../assets/Jim.png"
import Ahmmed from "../assets/Ahmmed.png"
function Catagory() {
    let itmes = [
        {
            name: "গ্রাফিকস",
            icon: icon1
        },
        {
            name: "নেটওয়ার্কিং",
            icon: Vector
        },
        {
            name: "সফটওয়্যার",
            icon: Jim
        },
        {
            name: "ফিল্ম মিডিয়া ",
            icon: Ahmmed
        },
    {
            name: "গ্রাফিকস",
            icon: icon1
        },
        {
            name: "নেটওয়ার্কিং",
            icon: Vector
        }
    ]

const ArrowStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  zIndex: 2,
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  background: "red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
};

function SampleNextArrow({ onClick, style }) {
  return (
    <div
      style={{ ...ArrowStyle, right: "-15px" }}
      onClick={onClick}
    >
      <GrFormNext color="white" />
    </div>
  );
}

function SamplePrevArrow({ onClick, style }) {
  return (
    <div
      style={{ ...ArrowStyle, left: "-15px" }}
      onClick={onClick}
    >
      <GrFormPrevious color="white" />
    </div>
  );
}


var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

    return (
        <section className='text-white  absolute top-[-100px] left-0 w-full '>
            <Container>
               <Slider {...settings}>
                 {itmes.map((cItem) => (
                    <Catagory_item item={cItem} />
                ))}
               </Slider>
            
            </Container>
           
        </section>
    )
}

export default Catagory
