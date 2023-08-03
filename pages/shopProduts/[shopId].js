import { useRouter } from 'next/router'
import React from 'react'
import { products } from '@/Components/data'
import Image from 'next/image'
import Stars from "../../Components/Stars/Stars"
import { useState } from 'react'

//Icons
import { BsShop } from 'react-icons/bs'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { AiOutlineDollarCircle } from 'react-icons/ai'

function Shopid() {




    const router=useRouter()
    const {shopId}=router.query
    const productDetailse=products[shopId-1]
    console.log(productDetailse)
  return (
    <div className='flex flex-col md:flex-row gap-8 items-center justify-between max-w-[1350px] mx-auto mt-5'>

      <div className='border-2 p-2 rounded-lg shadow-lg'>
        <h1 className='text-right mt-5 text-xl md:text-2xl text-red-600'>پیشنهاد شگفت انگیز</h1>
        <div className='flex items-center justify-center gap-6'>
        <p className='text-blue-500 cursor-pointer'>نظرات</p>
        <p className='text-blue-500 cursor-pointer'>مقایسه ها</p>
        <Stars/>
        </div>
        <Image src={productDetailse?.image} width={400} height={400} alt='/'/>
        <p className='text-gray-500'>{productDetailse?.name}</p>
      </div>
      




      <div className='flex flex-col bg-[#eee] gap-4 border-[2px] rounded-lg h-fit border-blue-400 w-[400px] items-center'>

<h1 className='text-xl md:text-3xl text-red-600 '>فروشنده</h1>
<div className='flex items-center'>
  <p>فروشگاه شما</p>
  <BsShop size={20}/>
</div>
  <p> رضایت از کالا عملکرد عالی</p>

    <div className='flex items-center'>
      <p>گارانتی اصالت و سلامت فیزیکی کالا</p>
      <AiOutlineCheckCircle size={20}/>
    </div>

    <div className='flex items-center justify-between w-[100px]'>
      <p> $ {productDetailse?.price}</p>
      <AiOutlineDollarCircle/>
    </div>

    <div className='py-9'>
      <button className='bg-red-500 text-white w-[300px] h-[60px] text-xl rounded-lg'>افزودن به سبد خرید</button>
    </div>

</div>


    </div>
  )
}

export default Shopid
