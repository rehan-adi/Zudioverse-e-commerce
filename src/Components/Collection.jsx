import React from 'react';

function Collection() {

  const imageTextStyle = {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    color: 'white', 
    fontSize: '15px',
    fontWeight: 'semibold', 
  };

  return (
    <div className='h-[110vh] w-auto bg-white'>
      <h1 className='text-5xl mt-20 ml-[70px] font-bold'>
        Curated <span className='opacity-55 text-[#333333]'>Collections</span>
      </h1>
      <div className='flex justify-center mt-5 gap-10 items-center'>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_2512_2.jpg?v=1695800703&width=430" alt="" />
          <p style={imageTextStyle} className='uppercase'  >Elevate Your Wardrobe</p>
        </div>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_2511.jpg?v=1695799414&width=430" alt="" />
          <p style={imageTextStyle} className='uppercase' >New Era</p>
        </div>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_8635.jpg?v=1689981261&width=430" alt="" />
          <p style={imageTextStyle} className='uppercase' >Less Impact</p>
        </div>
      </div>
      <div>
          <h1 className='text-5xl mt-14 ml-[70px] font-bold'>Featured <span className='opacity-55 text-[#333333]'>Categories</span></h1>
          <p className='text-xl font-semibold ml-[70px] mt-5 '>All weather condition - Jacket - T-Shirt - Shirt - Shorts and many more. </p>
      </div>
    </div>
  );
}

export default Collection;
