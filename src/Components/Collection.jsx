import React from 'react';
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

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
    <div className='h-[480vh] w-auto bg-white'>
          <div id='home' className='w-auto flex justify-center gap-40 overflow-hidden items-center h-screen bg-white'>
             <div>
                  <motion.h4 
                  initial={{opacity: 0, y : 30, rotate: 10}}
                  animate={{opacity: 1, y : 0, rotate: 0}}
                  transition={{duration: 0.80}}
                  className='font-semibold text-2xl '>NOW IN STORES</motion.h4>
                  <motion.h1 
                   initial={{opacity: 0, y : 30, rotate: 10}}
                   animate={{opacity: 1, y : 0, rotate: 0}}
                   transition={{duration: 0.80, delay: 0.30}}
                  className='text-7xl text-black font-bold'>New SS19 <br /> 
                  <motion.span
                   initial={{opacity: 0, y : 30, rotate: 10}}
                   animate={{opacity: 1, y : 0, rotate: 0}}
                   transition={{duration: 0.80, delay: 0.60}}
                  >Collection</motion.span></motion.h1>
                  <motion.p className='text-lg mt-4 text-black'> 
                  <motion.span
                  initial={{opacity: 0, y : 30, rotate: 50}}
                  animate={{opacity: 1, y : 0, rotate: 0}}
                  transition={{duration: 0.80, delay: 0.90}}
                  >Discover the new Coats,</motion.span> <br /> 
                  <motion.span
                  initial={{opacity: 0, y : 30, rotate: 10}}
                  animate={{opacity: 1, y : 0, rotate: 0}}
                  transition={{duration: 0.80, delay: 1.20}}
                  >Shirt, Pants, Shorts and</motion.span> <br /> 
                  <motion.span
                  initial={{opacity: 0, y : 30}}
                  animate={{opacity: 1, y : 0}}
                  transition={{duration: 0.80, delay: 1.50}}
                  >Accessories <span className='text-black font-semibold'>ZUDIOVERSE</span> has to</motion.span><br /> 
                  <motion.span
                   initial={{opacity: 0, y : 30}}
                   animate={{opacity: 1, y : 0}}
                   transition={{duration: 0.80, delay: 1.80}}
                  >offer</motion.span>.</motion.p>
                  <motion.button
                    initial={{opacity: 0, y : 30, rotate: 10}}
                    animate={{opacity: 1, y : 0, rotate: 0}}
                    transition={{duration: 0.80, delay: 2.10}}
                  className='py-3 px-4 mt-8 bg-black hover:opacity-80 text-white'>See Collection</motion.button>
             </div>
             <div className=''>
                <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c6df7d99ee57ba589af62_beanie-casual-fashion-1967565%20(1).jpg"  width={650}  alt="img" />
             </div>
    </div>
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
      <div className='w-auto h-[16vh] flex justify-center mt-16 items-center bg-yellow-500'>
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
    <div className='bg-white mt-16 w-auto h-[85vh]'>
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
    <div className='h-[15vh] flex mt-5 mb-5 justify-center items-center w-auto bh-white'>
               <div className='flex justify-center gap-14 items-center'>
                  <img src="https://hugotech.co/wp-content/uploads/2023/10/Google.svg" width={65} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/10/Meta.svg" width={70} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/10/Upwork.svg" width={70} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/11/Asset-62.svg" width={100} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/11/Asset-47.svg" width={100} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/11/Asset-56.svg" width={100} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/11/Asset-48.svg" width={100} alt="" />
                  <img src="https://hugotech.co/wp-content/uploads/2023/11/Asset-49.svg" width={100} alt="" />
               </div>
    </div> 

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

    <div className='w-auto h-[42vh] mt-14 flex flex-col justify-center items-center bg-white '>
           <marquee className='line-h text-[100px] font-semibold' behavior="scroll"   loop="-1" scrollamount="15" direction="left">
           DISCOVER LATEST TRENDS|EXCLUSIVE DEALS|TRENDY COLLECTION
          </marquee>
           <marquee className='line-h mt-14 text-[100px] font-semibold' behavior="scroll"   loop="-1" scrollamount="15" direction="right">
             REVAMP YOUR WARDROBE | SPRING COLLECTION | SHOP WITH STYLE
          </marquee>
    </div>

    </div>
  );
}

export default Collection;
