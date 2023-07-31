import Link from 'next/link'
import React from 'react'

function SingUpPage() {
  return (
    <form className='mx-auto border-[3px] w-[400px] border-blue-600 rounded-lg p-3 bg-slate-100 mt-[7rem] min-h-[600px]'>
        <h1 className='text-center text-3xl text-blue-500 font-bold'>ثبت نام</h1>
        <div className='flex flex-col items-center gap-6'>
            <label className='text-xl text-blue-800 font-bold'>ایمیل</label>
            <input className='w-[300px] h-[40px] bg-zinc-300 rounded-md outline-none placeholder:text-right placeholder:text-xl placeholder:mr-3 placeholder:text-black' type='email' placeholder='ایمیل خود را وارد کنید'/>
            <label className='text-xl text-blue-800 font-bold'>نام کاربری</label>
            <input className='w-[300px] h-[40px] bg-zinc-300 rounded-md outline-none placeholder:text-right placeholder:text-xl placeholder:mr-3 placeholder:text-black' type='text' placeholder='نام کاربری خود را وارد کنید'/>
            <label className='text-xl text-blue-800 font-bold'>رمز عبور</label>
            <input className='w-[300px] h-[40px] bg-zinc-300 rounded-md outline-none placeholder:text-right placeholder:text-xl placeholder:mr-3 placeholder:text-black' type='password' placeholder='رمز عبور مشخص کنید'/>
            <label className='text-xl text-blue-800 font-bold'>تکرار رمز ورود</label>
            <input className='w-[300px] h-[40px] bg-zinc-300 rounded-md outline-none placeholder:text-right placeholder:text-xl placeholder:mr-3 placeholder:text-black' type='password' placeholder='رمز عبور را تکرار کنید'/>
        </div>
        <div className='flex justify-center mt-9'>
            <button className='bg-blue-700 p-2 w-[200px] text-xl text-white font-bold rounded-lg'>ثبت نام</button>
        </div>
        <div className='flex text-xl justify-center gap-3 mt-9'>
           <Link href={"/singin"}>
           <p className='text-blue-600'>ورود به اکانت</p>
           </Link>
           <p>اکانت دارم</p>
        </div>
    </form>
  )
}

export default SingUpPage