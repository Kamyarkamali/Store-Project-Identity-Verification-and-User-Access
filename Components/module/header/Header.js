import React, { useState } from 'react'
import { useMounted } from 'react-use';
//React Icons
import {AiOutlineUser} from "react-icons/ai";

import {AiTwotoneSetting} from "react-icons/ai";
import { BsShare } from 'react-icons/bs';

import {BsBag} from "react-icons/bs";

import { BsJustify } from 'react-icons/bs';


function Header() {
    
    const [isHovering, setIsHovering] = useState(false);

    const [shared,setShared]=useState(false);

    
  return (
    <div className='bg-[#240E8B] min-h-[150px] max-w-[1400px] mx-auto'>
    <div className='flex items-center justify-between py-4'>

    <div className='flex gap-8 ml-4 p-1'>
        <BsBag size={30} color='white' className='relative'/>
        <span className='absolute left-[19px] top-9 w-4 text-center rounded-xl font-bold bg-yellow-400'>0</span>

        <AiOutlineUser size={30} color='black' className='bg-yellow-500 rounded-md'/>
        
    </div>

    <div className='flex justify-evenly w-[800px]'>
    <input className='w-[500px] mr-9 placeholder:text-right placeholder:text-gray-600 placeholder:text-xl placeholder:mr-3 rounded-lg outline-none bg-[#D1D5DB]' type='text' placeholder='نام محصول را وارد کنید'/>
    <h2 className='text-3xl text-white'>خوش آمدید</h2>
    </div>

    </div>

    <div className='flex justify-end py-9 gap-9 mr-9 text-white text-xl'>
        <p>کد تخفیف</p>
        <p>محصولات</p>
        <div className='flex items-center gap-2' onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)}>
        <p>دسته بندی کالا</p>

           <BsJustify className='relative' size={30}/>
            
              {isHovering&&<div className='flex flex-col absolute items-end text-right gap-5 right-[43px] top-[200px] py-5 w-screen h-[200px] shadow-lg bg-[#eee]'>
                <span className='bg-yellow-400 p-1 w-[110px] text-gray-500 font-bold rounded-lg hover:text-orange-500 duration-300 hover:w-[120px] cursor-pointer'>گوشی</span>
                <span className='bg-yellow-400 p-1 w-[110px] text-gray-500 font-bold rounded-lg hover:text-orange-500 duration-300 hover:w-[120px] cursor-pointer'>لپ تاپ</span>
                <span className='bg-yellow-400 p-1 w-[110px] text-gray-500 font-bold rounded-lg hover:text-orange-500 duration-300 hover:w-[120px] cursor-pointer'>سایر لوازم</span>
              </div>}
        </div>
    </div>

    <div>
    <div onClick={()=>setShared(!shared)} className='ml-4 p-2 inline-block bg-blue-500 rounded-full cursor-pointer relative'>
    <BsShare size={30} color='white'/>
    </div>
    {shared&&<div className='absolute top-[230px] left-[30px] rounded-lg bg-blue-400'>
        <div className='flex flex-col p-2 gap-3 items-center'>
        <span className='hover:scale-105 cursor-pointer duration-300 border-black border-b-[1px]'>1</span>
        <span className='hover:scale-105 cursor-pointer duration-300 border-black border-b-[1px]'>1</span>
        <span className='hover:scale-105 cursor-pointer duration-300 border-black border-b-[1px]'>1</span>
        </div>
    </div>}
    </div>

    </div>
  )
}

export default Header