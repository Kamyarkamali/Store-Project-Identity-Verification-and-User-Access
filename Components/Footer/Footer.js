import Image from 'next/image'
import React from 'react'

function Footer() {

  const footer=[
    {id:1,src:"/svg/bazgasht.svg",title:"۷ روز ضمانت بازگشت"},
    {id:2,src:"/svg/pardakht.svg",title:"پرداخت در محل"},
    {id:2,src:"/svg/poshtibani.svg",title:"پشتیبانی 24 ساعته"},
    {id:2,src:"/svg/tahvil.svg",title:"تحویل اکسپرس"},
    {id:2,src:"/svg/zemanat.svg",title:"ضمانت اصل بودن کالا"},
  ]

  return (
    <div className='max-w-[1400px] mx-auto mt-9 h-fit bg-[#eee]'>

      <div className='flex flex-col md:flex-row py-9 items-center justify-between'>
        {footer.map((item)=>(
          <div className='flex flex-col items-center gap-9'> 
          <Image src={item.src} width={60} height={60} alt='/'/>
          <p className='text-gray-700 text-md md:text-xl'>{item.title}</p>
          </div>
        ))}
      </div>
        <div className='hidden md:block'>

          <div className='flex justify-end  text-md md:text-xl items-center'>
            <div className='flex gap-9 items-center'>
          
          

            <div className='w-[300px]'>
              <h1>راهنمای خرید از ما</h1>
              <ul>
                <li className='mt-6'>نحوه ثبت سفارش</li>
                <li className='mt-6'>رویه ارسال سفارش</li>
                <li className='mt-6'>شیوه های پرداخت</li>
              </ul>
            </div>

            <div className='w-[300px]'>
              <h1>خدمات مشتریان</h1>
              <ul>
                <li className='mt-6'>پاسخ به پرسش های متداول</li>
                <li className='mt-6'>شرایط استفاده</li>
                <li className='mt-6'>رویه بازگرداندن کالا</li>
                <li className='mt-6'>حریم خصوصی</li>
              </ul>
            </div>

            <div className='w-[300px]'>
              <h1>با شما</h1>
              <ul>
                <li className='mt-4'>فروش در شما</li>
                <li className='mt-4'>همکاری با سازمان ها</li>
                <li className='mt-4'>فرصت های شغلی</li>
                <li className='mt-4'>فرصت های شغلی</li>
                <li className='mt-4'>تماس با ما</li>
                <li className='mt-4'>درباره ما</li>
              </ul>
            </div>

            </div>
          </div>

        </div>


          <div className='text-right mt-7 flex flex-col items-center'>
            <div className='flex flex-col items-end'>
              <h1 className='text-xl md:text-3xl'>فروشگاه شما ، بررسی ، انتخاب و خرید آنلاین</h1>
              <span className='max-w-[600px] mt-5 text-gray-500 text-right'>یک خرید اینترنتی مطمئن، نیازمند فروشگاهی است که بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمانی کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛ ویژگی‌هایی که فروشگاه اینترنتی شما سال‌هاست بر روی آن‌ها کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد</span>
            </div>

          <div className='flex items-center mt-5 justify-center gap-4'> 
            <Image src={"/svg/download.png"} width={100} height={100} alt='/'/>
            <Image src={"/svg/kasbokar-a20f68df.png"} width={100} height={100} alt='/'/>
            <Image src={"/svg/rezi-323b3ef0.png"} width={100} height={100} alt='/'/>
          </div>

          </div>
          <div className='bg-blue-600 text-center text-xl text-white'>
          <p>این صفحه صرفا جهت نمونه کار بوده و کاربرد دیگری ندارد</p>
          </div>
    </div>
  )
}

export default Footer