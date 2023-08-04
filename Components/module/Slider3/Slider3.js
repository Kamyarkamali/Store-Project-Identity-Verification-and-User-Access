import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContDown from "@/Components/ContDown/ContDown";
///Image
import Image from "next/image";

import { products } from "@/Components/data";


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

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

   
  }
  

  return (
    <div className="max-w-[350px] md:max-w-[800px] lg:max-w-[1000px] mx-auto py-8 shadow-md rounded-lg shadow-[gray] mt-8">
    <Slider {...settings}>
        {products.map((item)=>(
            <div>
                <div className="flex justify-between flex-col md:flex-row relative">
                   
                <Image className="object-cover" width={400} height={400} src={item.image} alt="/"/>
                <div className="flex flex-col items-end justify-center">
                        <p className="text-md md:text-2xl text-gray-800 text-center font-bold">{item.name}</p>
                        <div className="flex justify-center w-full">
                            <div className="flex gap-6 md:mt-8 text-sm md:text-2xl">
                       {/* {Price} */}
                             <div className="flex items-center gap-2">
                                <p>تومان</p>
                                <p>{formatNumber(item.price)}</p>
                            </div> 
                            <div className="flex items-center gap-2 text-sm md:text-2xl">
                             <p>تومان</p>
                        <del>{formatNumber(item.prevPrice)}</del> 
                            </div>
                       {/* {Price} */}
                            </div>
                            <div className="absolute flex items-end top-[30px] rounded-sm text-white text-[20px] right-[-26px] ml-6 w-52 bg-red-700 rotate-45">
                                <div className="flex justify-center w-full">
                                <p>تخفیف</p>
                                <p className="text-center">{item.discount} %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* {timer} */}
                <div className="flex justify-center items-center gap-9 text-sm md:text-[16px] py-4">
                    {/* <ContDown/> */}
                    <div>
                <button className="bg-blue-800 text-white p-1 rounded-md hover:bg-[#eee] hover:text-black duration-300">بریم برای خرید</button>
                </div>
                </div>
                {/* {timer} */}
            </div>
        ))}
    </Slider>
        </div>
  );
}