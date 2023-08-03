import Image from 'next/image'
import React from 'react'

function Hero2() {
  return (
    <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row mt-9 items-center justify-center gap-9'>
    <Image className='hover:scale-105 duration-300 cursor-pointer rounded-lg' src={"/hero/banner-2-6811d155.jpg"} alt='/' width={500} height={500}/>
    <Image className='hover:scale-105 duration-300 cursor-pointer rounded-lg' src={"/hero/banner-3-8f0dc72f.jpg"} alt='/' width={500} height={500}/>
    </div>
  )
}

export default Hero2