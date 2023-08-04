import Image from 'next/image'
import React from 'react'
import { useSelector , useDispatch} from 'react-redux'

///React toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { decrement ,incerement , checkOut} from '@/Redux/fetchare/createSlice';
import Link from 'next/link'

//Icons
import { BsFillEmojiFrownFill } from 'react-icons/bs';

function ShopAllItems() {
    const state=useSelector((state)=>state.items.products)

    console.log(state)
    
    const dispatch=useDispatch()

    const checkOutHandeler=()=>{
        dispatch(checkOut())
        toast.success("خرید با موفقیت انجام شد")
    }

  return (
    <div className='max-w-[1200px] mx-auto flex flex-col items-center mt-9'>
        {state.length===0?(
            <div className='flex flex-col gap-4'>
                <div className='bg-gray-500 p-1 text-white rounded-md flex items-center'> 
                <BsFillEmojiFrownFill size={20}/>
            <p>سبد خالی است</p>
                </div>
            <Link href={"/"}>
            <p>برو به فروشگاه</p>
            </Link>
            </div>
        ):(
            state.map((item)=>(
                <div className='flex items-center justify-evenly w-full'> 
                <div className='flex items-center border-[2px] border-gray-500 justify-evenly w-[200px] p-1 rounded-md'>
                    <button className='bg-blue-700 w-[30px] rounded-lg text-white font-bold' onClick={()=>dispatch(incerement({id:item.id}))}>+</button>
                    <span className='text-gray-500 font-bold'>{item.quantity}</span>
                    <button className='bg-red-700 w-[30px] rounded-lg text-white font-bold' onClick={()=>dispatch(decrement(item.id))}>-</button>
                </div> 
                    <p className='text-sm text-gray-500 font-bold text-center'>{item?.name}</p>
                    <Image src={item?.image} width={100} height={100} alt='/'/>
                </div>
            ))
        )}
        <div>
            {state.length>=1?(
                <button onClick={checkOutHandeler} className='bg-gray-600 w-[300px] h-[40px] rounded-md text-white'>پرداخت</button>
            ):null}
        </div>
        <ToastContainer/>
    </div>
  )
}

export default ShopAllItems