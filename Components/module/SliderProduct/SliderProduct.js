import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//data
import { laptop } from '@/Components/data'; 
import Image from 'next/image';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



function SliderProduct() {
  return (
    // <Carousel responsive={responsive}>
    //  {laptop.map((item)=>(
    //   <div key={item.id} className='py-9 flex flex-col items-center'>
    //    <Image src={item.image} key={item.id} width={200} height={200} className='object-contain relative'/>
    //    <div>
    //    <p className='w-[200px] absolute top-[13rem] right-[100px] text-sm text-gray-500 font-bold text-center'>{item.name}</p>
    //    </div>
    //   </div>
    //    ))}
    // </Carousel>
    <div className='flex max-w-[1200px] mx-auto items-center justify-center overflow-x-auto gap-8 p-3 bg-[#eee] scroll-snap scroll-snap-type-x mandatory smooth'>
      {laptop.map((item)=>(
        <div className='flex flex-col items-center'> 
        <Image className='hover:rotate-6 rounded-lg duration-300' src={item.image} width={170} height={170} alt='/'/>
        <div className='flex flex-col items-center justify-center'> 
        <p className='text-sm mt-2 w-[214px] text-center text-gray-600 font-bold'>{item.name}</p>
        <p className='text-sm w-[214px] text-center'>{item.price}</p>
        </div>
        </div>
        ))}
    </div>
  )
}

export default SliderProduct