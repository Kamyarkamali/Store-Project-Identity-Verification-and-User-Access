import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='mt-8 gap-6 flex flex-col items-center md:flex-row max-w-[1200px] mx-auto'>
        <Image src="/assets/hero1.jpg" alt='/' width={600} height={200} className='rounded-lg hover:scale-105 duration-300 cursor-pointer'/>
        <Image src="/assets/hero2.jpg" alt='/' width={600} height={200} className='rounded-lg hover:scale-105 duration-300 cursor-pointer'/>
    </div>
  )
}

export default Hero