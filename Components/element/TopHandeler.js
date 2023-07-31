import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

//icons
import { AiOutlineArrowUp } from 'react-icons/ai'

function TopHandeler() {
    const [showBtn,setShowBtn]=useState(false);

    function handelScroll(){
        if(window.scrollY>100){
            setShowBtn(true)
        } else{
            setShowBtn(false)
        }
    }

    function handelClick(){
        window.scrollTo({top:0,behavior:"smooth"})
    }

    useEffect(()=>{
        window.addEventListener("scroll",handelScroll)
        return()=>{
            window.removeEventListener("scroll",handelScroll)
        }
    },[])

  return (
    <div>
        <button  className='fixed top-[40rem] bg-blue-600 p-1 rounded-full' onClick={handelClick} style={{display:showBtn ? "block" : "none"}}>
            <AiOutlineArrowUp color="white" size={20}/>
        </button>
    </div>
  )
}

export default TopHandeler