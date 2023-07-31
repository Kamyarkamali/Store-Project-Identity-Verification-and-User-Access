import React from 'react'

//Icons
import { BsCheckCircle } from 'react-icons/bs';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { BsFillChatTextFill } from 'react-icons/bs';
import { BsArrowCounterclockwise } from 'react-icons/bs';
import { BsCash } from 'react-icons/bs';



function Options() {
  return (
    <div className='max-w-[1200px] flex flex-col md:flex-row font-bold  items-center justify-center gap-7 mx-auto mt-[3rem]'>
        <div className='flex gap-7 items-center justify-center bg-[#f2dada] p-1 w-fit justify-between rounded-lg'>
            <BsCheckCircle color='#60A5FA' size={30}/>
            <div className='flex flex-col text-gray-700 text-xl'>
            <p>اصالت کالا</p>
            <p>امن و قابل اعتماد</p>
            </div>
        </div>

        <div className='flex gap-7 items-center justify-center bg-[#f2dada] p-1 w-fit justify-between rounded-lg'>
            <BsFillCarFrontFill color='#60A5FA' size={30}/>
            <div className='flex flex-col text-gray-700 text-xl'>
            <p>ارسال سریع</p>
            <p>امن و مطمئن</p>
            </div>
        </div>

        <div className='flex gap-7 items-center justify-center bg-[#f2dada] p-1 w-fit justify-between rounded-lg'>
            <BsFillChatTextFill color='#60A5FA' size={30}/>
            <div className='flex flex-col text-gray-700 text-xl'>
            <p>پشتیبانی عالی</p>
            <p>درصورت عدم رضایت</p>
            </div>
        </div>

        <div className='flex gap-7 items-center justify-center bg-[#f2dada] p-1 w-fit justify-between rounded-lg'>
            <BsArrowCounterclockwise color='#60A5FA' size={30}/>
            <div className='flex flex-col text-gray-700 text-xl'>
            <p>بازگشت وجه</p>
            <p>درصورت عدم رضایت</p>
            </div>
        </div>

        <div className='flex gap-7 items-center justify-center bg-[#f2dada] p-1 w-fit justify-between rounded-lg'>
            <BsCash color='#60A5FA' size={30}/>
            <div className='flex flex-col text-gray-700 text-xl'>
            <p>تضمین قیمت</p>
            <p>کمترین قیمت بازار</p>
            </div>
        </div>
    </div>
  )
}

export default Options