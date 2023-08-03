import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSession } from 'next-auth/react'

function SingUpPage() {
  const [email,setEmail]=useState("")

  const [password,setPassword]=useState("")

  const [conformPassword,setConformPassword]=useState("")

  const {status}=useSession()


 const submitHandeler=(e)=>{
  e.preventDefault()
 }


  const singUp=async()=>{
    const res=await fetch("/api/singup",{
      method:"POST",
      body:JSON.stringify({email,password,conformPassword}),
      headers: {"Content-Type":"application/json"},
    })
    const data=await res.json()
    if(data.status==="success")window.location.href="/singin"
  }

  useEffect(()=>{
    if(status==="authenticated")window.location.href="/"
  },[])

  return (
    <form onSubmit={submitHandeler} className='border-[3px] mx-auto w-fit border-blue-600 rounded-lg p-3 bg-slate-100 mt-[7rem] min-h-[600px] shadow-xl shadow-[#d4a1a1]'>
        <h1 className='text-center text-3xl text-blue-500 font-bold'>ثبت نام</h1>
        <div className='flex flex-col items-center gap-6'>
            <label className='text-xl text-blue-800 font-bold'>ایمیل</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} name='email' className='w-[300px] h-[40px] bg-zinc-300 rounded-md outline-none placeholder:text-right placeholder:text-xl placeholder:mr-3 placeholder:text-black' type='email' placeholder='ایمیل خود را وارد کنید'/>
            <label className='text-xl text-blue-800 font-bold'>رمز عبور</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} name='password' className='w-[300px] h-[40px] bg-zinc-300 rounded-md outline-none placeholder:text-right placeholder:text-xl placeholder:mr-3 placeholder:text-black' type='password' placeholder='رمز عبور مشخص کنید'/>
            <label className='text-xl text-blue-800 font-bold'>تکرار رمز ورود</label>
            <input value={conformPassword} onChange={(e)=>setConformPassword(e.target.value)} name='confirmPassword' className='w-[300px] h-[40px] bg-zinc-300 rounded-md outline-none placeholder:text-right placeholder:text-xl placeholder:mr-3 placeholder:text-black' type='password' placeholder='رمز عبور را تکرار کنید'/>
        </div>
        <div className='flex justify-center mt-9'>
            <button onClick={singUp} className='bg-blue-700 p-2 w-[200px] text-xl text-white font-bold rounded-lg'>ثبت نام</button>
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