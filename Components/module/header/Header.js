import React, { useState } from 'react'
import {motion} from "framer-motion"
//React Icons
import {AiOutlineUser} from "react-icons/ai";

import {AiTwotoneSetting} from "react-icons/ai";
import { BsShare } from 'react-icons/bs';
import {BsBag} from "react-icons/bs";
import { BsJustify } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';
import TopHandeler from '@/Components/element/TopHandeler';

function Header() {
    
    const [isHovering, setIsHovering] = useState(false);

    const [isHoveringUser, setIsHoveringUser] = useState(false);

    const [shared,setShared]=useState(false);

    const [hamburgerMenu,setHamburgerMenu]=useState(false);

    const iconVariants={
      hover:{
        x:15,
        y:15,
        scale:1
      },
    }

    
  return (
    <div className='bg-[#240E8B] min-h-[150px] max-w-[1400px] mx-auto'>
    <div className='flex items-center justify-between py-4'>
    <div className='flex gap-8 ml-4 p-1'>
        <BsBag size={30} color='white' className='relative'/>
        <span className='absolute left-[19px] top-9 w-4 text-center rounded-xl font-bold bg-yellow-400'>0</span>

        {/* {panele user} */}
      <div onMouseEnter={()=>setIsHoveringUser(true)} onMouseLeave={()=>setIsHoveringUser(false)}>

        <motion.div variants={iconVariants} initial="initial"whileHover="hover">
        </motion.div>

        <AiOutlineUser size={30} color='black' className='bg-yellow-500 rounded-md relative cursor-pointer'/>
        {isHoveringUser&&<motion.div variants={iconVariants} initial="initial"whileHover="hover" className='absolute flex flex-col z-20 items-center top-[50px] left-[50px] bg-white p-3 text-gray-400 font-bold rounded-lg shadow-md shadow-black'>
        <span className='mb-4 text-sm  hover:bg-yellow-400 p-1 rounded-md hover:text-orange-500 duration-300 cursor-pointer'>صفحه اصلی</span>
        <span className='mb-4 text-sm hover:bg-yellow-400 p-1 rounded-md hover:text-orange-500 duration-300 cursor-pointer'>پنل کاربری</span>
        <span className='mb-4 text-sm hover:bg-yellow-400 p-1 rounded-md hover:text-orange-500 duration-300 cursor-pointer'>سبد خرید من</span>
        <span className='mb-4 text-sm hover:bg-yellow-400 p-1 rounded-md hover:text-orange-500 duration-300 cursor-pointer'>لیست علاقه مندی ها</span>
        <button className='mb-4 text-sm hover:bg-yellow-400 p-1 rounded-md hover:text-orange-500 duration-300 cursor-pointer'>ورود / خروج</button>
        </motion.div>}

      </div>
        {/* {panele user} */}
        
    </div>

    <div className='hidden md:block'>
    <div className='flex justify-evenly w-[800px]'>
    <input className='w-[500px] mr-9 placeholder:text-right placeholder:text-gray-600 placeholder:text-xl placeholder:mr-3 rounded-lg outline-none bg-[#D1D5DB]' type='text' placeholder='نام محصول را وارد کنید'/>
    <h2 className='text-3xl text-white'>خوش آمدید</h2>
    </div>
    </div>

      {/* {hamburgerMenu} */}
    <div className='relative md:hidden'>
      {!hamburgerMenu ? (
        <BsJustify onClick={()=>setHamburgerMenu(!hamburgerMenu)} size={30} color='white' className='cursor-pointer'/>
      ) : (
        <AiOutlineClose onClick={()=>setHamburgerMenu(!hamburgerMenu)} size={30} color='white' className='cursor-pointer'/>
      )}
      {/* {menu} */}
      <div className={hamburgerMenu ? "absolute right-[10px] p-3 text-white text-xl h-[80vh] w-screen rounded-md flex flex-col items-center justify-around bg-orange-500 z-10 duration-300" : "duration-300 right-[-100%] hidden"}>
        <p>محصولات</p>
        <p>سبد خرید</p>
        <p>کد تخفیف</p>
        <p>درباره ما</p>
        <p>تماس با ما</p>
      </div>
      {/* {menu} */}
    </div>
      {/* {hamburgerMenu} */}


    </div>
    <div className='hidden md:block'>
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
    </div>

    <div className='hidden md:block'>
    <div onClick={()=>setShared(!shared)} className='ml-4 p-2 inline-block bg-blue-500 rounded-full cursor-pointer relative'>
    <BsShare size={30} color='white'/>
    </div>
    {shared&&<div className='absolute top-[220px] left-[27px] rounded-lg bg-blue-400'>
        <div className='flex flex-col p-2 gap-3 items-center'>
        <AiOutlinePhone size={25} className='hover:scale-105 duration-200'/>
        <BsInstagram size={25} color='pink' className='hover:scale-105 duration-200'/>
        <BsLinkedin size={25} color='blue' className='hover:scale-105 duration-200'/>
        <AiFillGithub size={25} className='hover:scale-105 duration-200'/>
        </div>
    </div>}
    </div>

    {/* {Btn Top handeler} */}
    <div>
    <TopHandeler/>
    </div>
    {/* {Btn Top handeler} */}

    </div>
  )
}

export default Header