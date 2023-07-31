import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


///Image
import Image from "next/image";

const slide=[
    {id:1,image:"/slider/1.jpg"},
    {id:2,image:"/slider/2.jpg"},
    {id:3,image:"/slider/3.jpg"},
]

export default function SimpleSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive:[
      {
        breakpoint: 640, 
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-[350px] md:max-w-[800px] lg:max-w-[1000px] mx-auto py-8">
    <Slider {...settings}>
        {slide.map((item)=>(
            <div>
            <Image className="object-contain rounded-lg" width={1000} height={1000} src={item.image} alt="/"/>
            </div>
        ))}
    </Slider>
        </div>
  );
}