import React from 'react'
import { products } from '../data'
import Image from 'next/image'
import { useState } from 'react'

///Icons 
import { BsFillHeartFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Link from 'next/link'


//Redux
import { useSelector,useDispatch } from 'react-redux'

import { addToCart ,decrement} from '@/Redux/fetchare/createSlice'

function ShopProdutcsPage() {

    const [menu,setMenu]=useState(null)

    const handleHover = (hoverStatus) => {
        setMenu(hoverStatus);
      };

      const dispatch=useDispatch()

      const state=useSelector((state)=>state.items.products)
      console.log(state)

      const handelAddToCart=(product)=>{
        dispatch(addToCart(product))
        localStorage.setItem("cartProducts",JSON.stringify(product))
      }

    

  return (
    <div className='max-w-[1400px] flex-wrap mx-auto gap-5 flex justify-center items-center mt-9 '>
        {products.map((item)=>(
            <div onClick={()=>handleHover(item.id)} onMouseEnter={()=>handleHover(item.id)} onMouseLeave={()=>handleHover(null)} className='border-[3px] border-blue-400 rounded-lg relative'>
                <Link href={`/shopProduts/${item.id}`}>
                <Image src={item.image} alt='/' width={300} height={300}/>
                </Link> 

            {/* {menu} */}

            <div> 
            {menu===item.id&&<div className={`absolute flex flex-col gap-3 top-0 opacity-0 duration-300 ${menu===item.id ? "opacity-100":""}`}> 
            <BsFillHeartFill size={20}/>
            <AiOutlineInfoCircle size={20} color='gray'/>

            <div className='flex justify-center left-[60px] py-5 absolute top-[240px]'> 
                    <button onClick={()=>handelAddToCart(item)} className='bg-blue-700 mt-3 h-[30px] w-[200px] text-white rounded-lg font-bold'>افزودن به سبد خرید</button>
                </div>
            </div>}
                 {/* {name} */}
                 <div className='w-[320px] mt-6'> 
                    <p className='text-center text-md md:text-xl text-gray-600'>{item.name}</p>
                </div>
                {/* {name} */}
            </div>

            {/* {menu} */}
            </div>
        ))}
    </div>
  )
}

export default ShopProdutcsPage