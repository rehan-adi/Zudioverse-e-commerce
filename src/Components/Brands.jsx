import React from 'react';

function Brands() {
  return (
    <div className='bg-white w-auto h-[85vh]'>
      <h1 className='text-5xl mt-7 ml-[70px] font-bold'>Colabration with top brand's. </h1>
      <div className='flex justify-center mt-6 gap-10 items-center'>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/Screenshot_2023-07-18_at_18.46.24.jpg?v=1689859402&width=430" alt="" />
          <h1 className="absolute bottom-60 text-3xl font-bold left-0 right-0 text-white text-center p-2">TOMMY HILFIGER</h1>
        </div>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_2509.jpg?v=1695798933&width=430" alt="" />
          <h1 className="absolute text-3xl font-bold bottom-60 left-0 right-0 text-white text-center p-2">ZUDIOVERSE</h1>
        </div>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_2510.jpg?v=1695799132&width=430" alt="" />
          <h1 className="absolute bottom-60 text-2xl font-bold left-0 right-0 text-white text-center p-2">LOUIS VUITTON</h1>
        </div>
      </div>
    </div>
  );
}

export default Brands;
