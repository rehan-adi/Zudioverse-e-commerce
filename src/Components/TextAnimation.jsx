import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function TextAnimation() {
  return (
    <div className='w-auto h-[16vh] flex justify-center items-center bg-yellow-500'>
            <h1 className='font-semibold uppercase text-2xl'>ZudioVerse Offer <span> 
            <TypeAnimation
      sequence={[
        '30% Discount On Order Over - $200',
        1000,
        'Best Quality Cloths Only For You',
        1000,
      ]}
      wrapper="span"
      speed={30}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
                </span>
            </h1>
    </div>
  )
}

export default TextAnimation