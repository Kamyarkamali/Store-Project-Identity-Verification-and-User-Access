import Link from 'next/link'
import React, { useEffect } from 'react'

//next Auth
import {signIn, useSession} from "next-auth/react"
import { useState } from 'react'

function SingIn() {

  const [email,setEmail]=useState("")

  const [password,setPassword]=useState("")

  const {status}=useSession();


  const submitHandeler=(e)=>{
    e.preventDefault()
   }
  
  
    const singIn=async()=>{
      const res=await signIn("credentials",{
        email,
        password,
        redirect:false
      })
    if(res)window.location.href="/"
    }


    useEffect(()=>{
      if(status==="authenticated")window.location.href="/"
    },[])

  return (
    <form onSubmit={submitHandeler} className='mx-auto border-[3px] w-[400px] border-blue-600 rounded-lg p-3 bg-slate-100 mt-[9rem] min-h-[500px] flex flex-col items-center'>
        <h1 className='text-center text-3xl text-blue-500 font-bold'>ورود</h1>
        <div className='flex flex-col items-center gap-6'>
            <label className='text-xl text-blue-800 font-bold'>ایمیل</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} className='w-[300px] h-[40px] bg-zinc-300 rounded-md outline-none placeholder:text-right placeholder:text-xl placeholder:mr-3 placeholder:text-black' type='email' placeholder='ایمیل خود را وارد کنید'/>
            <label className='text-xl text-blue-800 font-bold'>رمز عبور</label>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} className='w-[300px] h-[40px] bg-zinc-300 rounded-md outline-none placeholder:text-right placeholder:text-xl placeholder:mr-3 placeholder:text-black' type='password' placeholder='رمز عبور مشخص کنید'/>
        </div>
        <div className='flex justify-center mt-9'>
            <button onClick={singIn} className='bg-blue-700 p-2 w-[200px] text-xl text-white font-bold rounded-lg'>ورود</button>
        </div>
        <div className='flex text-xl justify-center gap-3 mt-9'>
           <Link href={"/singup"}>
           <p className='text-blue-600'>ساخت اکانت</p>
           </Link>
           <p> اکانت ندارید؟</p>
        </div>
    </form>
  )
}

export default SingIn