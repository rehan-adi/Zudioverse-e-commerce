import React from 'react';

function BigImage() {
  return (
    <div className='relative w-full h-[80vh] mt-4 bg-white'>
      <img
        src="https://oqium.com/cdn/shop/files/banner2880x1620.jpg?v=1703241559&width=1220"
        alt=""
        className='w-full h-full object-cover'
      />
      <div className='absolute top-60 left-20 text-center text-white'>
        <h1 className='text-4xl font-bold'>We will also add Sports <br /> Accessories in <br /> Future</h1>
      </div>
    </div>
  );
}

export default BigImage;
