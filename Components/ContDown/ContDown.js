import React from 'react'
import Countdown from 'react-countdown'


const eningDate=new Date("2023-09-30")

function ContDown() {
  return (
    <div>
        <Countdown date={eningDate} className='font-bold text-xl md:text-3xl text-gray-700'/>
    </div>
  )
}

export default ContDown