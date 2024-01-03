import React from 'react'

function SlidingText() {
  return (
    <div className='w-auto h-[42vh] mt-2 flex flex-col justify-center items-center bg-white '>
           <marquee className='line-h text-[100px] font-semibold' behavior="scroll"   loop="-1" scrollamount="15" direction="left">
           DISCOVER LATEST TRENDS|EXCLUSIVE DEALS|TRENDY COLLECTION
          </marquee>
           <marquee className='line-h mt-14 text-[100px] font-semibold' behavior="scroll"   loop="-1" scrollamount="15" direction="right">
             REVAMP YOUR WARDROBE | SPRING COLLECTION | SHOP WITH STYLE
          </marquee>
    </div>
  )
}

export default SlidingText