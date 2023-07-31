import Image from 'next/image'
import React from 'react'

const products=[
    {id:1,image:"/productnew/1.png",name:"اسباب بازی کودک و نوزاد"},
    {id:2,image:"/productnew/2.png",name:"محصولات بومی محلی"},
    {id:3,image:"/productnew/3.png",name:"زیبایی وسلامت"},
    {id:4,image:"/productnew/4.png",name:"خانه وآشپزخانه"},
    {id:5,image:"/productnew/5.png",name:"کالای دیجیتال"},
    {id:6,image:"/productnew/6.png",name:"ابزار خودرو"},
    {id:7,image:"/productnew/7.png",name:"ورزش و سفر"},
    {id:8,image:"/productnew/8.png",name:"پوشاک"},
    {id:9,image:"/productnew/9.png",name:"موبایل"},
    {id:10,image:"/productnew/10.png",name:"کتاب ،لوازم تحریر و هنر"},
]

function ProductNew() {
  return (
    <>
    <div className='md:flex max-w-[1200px] gap-6 grid grid-cols-2 items-center md:flex-row mx-auto py-8 mt-9 justify-around flex-wrap'>
        {products.map((item)=>(
            <div key={item.id} className='flex flex-col items-center'> 
                <Image src={item.image} className=' cursor-pointer hover:rotate-[30deg] duration-300' alt='/' width={160} height={160}/>
                <span className='text-xl font-bold'>{item.name}</span>
            </div>
        ))}
    </div>
    <div className='flex justify-center mt-7'>
        <Image className='rounded-lg hover:scale-105 duration-300 cursor-pointer' src="/assets/offer-1-40dd6000.jpg" alt='/' width={1000} height={1000}/>
    </div>
        </>
  )
}

export default ProductNew