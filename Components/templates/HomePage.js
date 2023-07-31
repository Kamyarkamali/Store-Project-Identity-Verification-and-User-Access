import React from 'react'
import Slider from "../module/Slider/Slider";
import SliderProduct from "../module/SliderProduct/SliderProduct"
import Hero from '../module/Hero/Hero';
import Slider3 from "../module/Slider3/Slider3";
import Options from '../Options/Options';
import ProductNew from '../ProductNew/ProductNew';


function HomePage() {
  return (
    <div>
        <Slider/>
        <div className='max-w-[1200px] mx-auto'>
        <SliderProduct/>
        </div>
        <Hero/>
        <Slider3/>
        <Options/>
        <div>
          <h2 className='text-center mt-[6rem] text-xl md:text-5xl'>دسته بندی فروشگاه ها</h2>
        <ProductNew/>
        </div>
    </div>
  )
}

export default HomePage