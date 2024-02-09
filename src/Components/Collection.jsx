import React from 'react';
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom';
import  {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Collection() {



  const controls1 = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView) {
      controls1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
    }
  }, [inView, controls1]);

  const weekend = useAnimation();
  const weekend1 = useAnimation();

  const [ref1, inView1] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView1) {
      weekend.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.6 } });
      weekend1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.9 } });
    }
  }, [inView1, weekend, weekend1]);

  const Starboy = useAnimation();

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView2) {
      Starboy.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 1.3 } });
    }
  }, [inView2, Starboy]);



  const Image = useAnimation();
  const Image1 = useAnimation();
  const Image2 = useAnimation();
  const Image3 = useAnimation();
  const Image4 = useAnimation();
  const Image5 = useAnimation();
  const Image6 = useAnimation();
  const Image7 = useAnimation();

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    rootMargin: '50px -50px',
  });

  useEffect(() => {
    if (inView3) {
      Image.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.3 } });
      Image1.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.5 } });
      Image2.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.7 } });
      Image3.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 0.9 } });
      Image4.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 1.1 } });
      Image5.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 1.3 } });
      Image6.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 1.5 } });
      Image7.start({ x: 0, opacity: 1, transition: { duration: 1, delay: 1.7 } });
    }
  }, [inView3]);


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
    <div className='max-h-fit w-auto bg-white'>
          <div id='home' className='w-auto flex justify-center flex-col lg:flex-row gap-28 md:gap-32 lg:gap-40 overflow-hidden items-center h-[180vh]  md:h-[180vh] lg:h-screen bg-white'>
             <div>
                  <motion.h4 
                  initial={{opacity: 0, y : 30, rotate: 10}}
                  animate={{opacity: 1, y : 0, rotate: 0}}
                  transition={{duration: 0.80}}
                  className='font-semibold text-base mt-20 lg:mt-0 md:text-4xl lg:text-2xl '>NOW IN STORES</motion.h4>
                  <motion.h1 
                   initial={{opacity: 0, y : 30, rotate: 10}}
                   animate={{opacity: 1, y : 0, rotate: 0}}
                   transition={{duration: 0.80, delay: 0.30}}
                  className='lg:text-7xl text-5xl mt-6 lg:mt-0 md:text-8xl text-black font-bold'>New SS19 <br /> 
                  <motion.span
                   initial={{opacity: 0, y : 30, rotate: 10}}
                   animate={{opacity: 1, y : 0, rotate: 0}}
                   transition={{duration: 0.80, delay: 0.60}}
                  >Collection</motion.span></motion.h1>
                  <motion.p className='text-lg lg:mt-4 mt-7 md:text-2xl text-black'> 
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
                  >offer.</motion.span></motion.p>
                  <Link to="/Products">
                  <motion.button
                    initial={{opacity: 0, y : 30, rotate: 10}}
                    animate={{opacity: 1, y : 0, rotate: 0}}
                    transition={{duration: 0.80, delay: 2.10}}
                  className='py-3 px-3 lg:px-4 md:px-5 md:text-xl mt-8 bg-black hover:opacity-80 text-white'>See Collection</motion.button>
                  </Link>
             </div>
             <div className=''>
                <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c6df7d99ee57ba589af62_beanie-casual-fashion-1967565%20(1).jpg" className=' md:w-[575px] lg:w-[650px]'  width={330}  alt="img" />
             </div>
    </div>
      <motion.h1
       initial={{opacity: 0, x : -35}}
       animate={controls1}
       ref={ref}  
      className='lg:text-5xl text-2xl mt-0 lg:mt-24 md:ml-24 ml-6 mb-8 lg:mb-8 md:text-4xl lg:ml-[70px] font-bold'>
        Curated <span className='opacity-55 text-[#333333]'>Collections</span>
      </motion.h1>
      <div className='flex justify-center flex-col lg:flex-row mt-5 gap-10 items-center'>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_2512_2.jpg?v=1695800703&width=430" className='lg:w-[430px] md:w-[575px] ' width={320} alt="" />
          <p
          style={imageTextStyle} className='uppercase'>Elevate Wardrobe</p>
        </div>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_2511.jpg?v=1695799414&width=430" className=' md:w-[575px] lg:w-[430px]' width={320} alt="" />
          <p
          style={imageTextStyle} className='uppercase' >New Era</p>
        </div>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_8635.jpg?v=1689981261&width=430" className='lg:w-[430px] md:w-[575px] ' width={320} alt="" />
          <p style={imageTextStyle} className='uppercase' >Less Impact</p>
        </div>
      </div>
      <div>
          <motion.h1
           initial={{opacity: 0, x : -35}}
           animate={weekend}
           ref={ref1}   
          className='lg:text-5xl text-2xl md:text-4xl md:mb-12 md:ml-24 mt-14 ml-7 lg:ml-[70px] font-bold'>Featured <span className='opacity-55 text-[#333333]'>Categories</span></motion.h1>
          <motion.p
           initial={{opacity: 0, x : -35}}
           animate={weekend1}
           ref={ref}   
          className='lg:text-xl text-sm font-semibold md:ml-24 md:text-2xl ml-7 lg:ml-[70px] mt-5 '>All weather condition - Jacket - T-Shirt - Shirt - Shorts and many more. </motion.p>
      </div>
      <div className='w-auto h-[16vh] flex justify-center mt-16 items-center bg-yellow-500'>
            <h1 className='font-semibold uppercase text-xs md:text-2xl lg:text-2xl'>ZudioVerse Offer <span> 
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
    <div className='bg-white lg:mt-16 w-auto lg:h-[85vh]'>
    <motion.h1
        initial={{opacity: 0, x : -35}}
        animate={Starboy}
        ref={ref2}   
      className='lg:text-5xl text-2xl mt-7 ml-7 lg:ml-[70px] font-bold'>Colabration with top brand's. </motion.h1>
      <div className='flex justify-center flex-col lg:flex-row mt-6 gap-10 items-center'>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/Screenshot_2023-07-18_at_18.46.24.jpg?v=1689859402&width=430" className='lg:w-[430px]' width={320} alt="" />
          <h1 className="absolute  bottom-48 lg:bottom-60 text-3xl font-bold left-0 right-0 text-white text-center p-2">TOMMY HILFIGER</h1>
        </div>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_2509.jpg?v=1695798933&width=430" className='lg:w-[430px]' width={320} alt="" />
          <h1 className="absolute text-3xl font-bold bottom-48 lg:bottom-60 left-0 right-0 text-white text-center p-2">ZUDIOVERSE</h1>
        </div>
        <div className='relative'>
          <img src="https://oqium.com/cdn/shop/files/IMG_2510.jpg?v=1695799132&width=430" className='lg:w-[430px]' width={320} alt="" />
          <h1 className="absolute  bottom-48 lg:bottom-60 text-2xl font-bold left-0 right-0 text-white text-center p-2">LOUIS VUITTON</h1>
        </div>
      </div>
    </div>
    <div className='h-[15vh] flex mt-5 mb-5 justify-center items-center w-auto bg-white'>
               <div className='flex justify-center gap-2 lg:gap-14 items-center'>
                  <motion.img
                     initial={{opacity: 0, x : -35}}
                     animate={Image}
                     ref={ref3}   
                  src="https://hugotech.co/wp-content/uploads/2023/10/Google.svg" clasName='lg:w-[65px]' width={27} alt="" />
                  <motion.img
                  initial={{opacity: 0, x : -35}}
                  animate={Image1}
                  ref={ref3}   
                  src="https://hugotech.co/wp-content/uploads/2023/10/Meta.svg" clasName='lg:w-[70px]' width={27} alt="" />
                  <motion.img
                  initial={{opacity: 0, x : -35}}
                  animate={Image2}
                  ref={ref3}   
                  src="https://hugotech.co/wp-content/uploads/2023/10/Upwork.svg" clasName='lg:w-[700px]' width={27} alt="" />
                  <motion.img
                  initial={{opacity: 0, x : -35}}
                  animate={Image3}
                  ref={ref3}   
                  src="https://hugotech.co/wp-content/uploads/2023/11/Asset-62.svg" clasName='lg:w-[100px]' width={45} alt="" />
                  <motion.img
                  initial={{opacity: 0, x : -35}}
                  animate={Image4}
                  ref={ref3}   
                  src="https://hugotech.co/wp-content/uploads/2023/11/Asset-47.svg" clasName='lg:w-[100px]' width={45} alt="" />
                  <motion.img
                   initial={{opacity: 0, x : -35}}
                   animate={Image5}
                   ref={ref3}   
                  src="https://hugotech.co/wp-content/uploads/2023/11/Asset-56.svg" clasName='lg:w-[100px]' width={40} alt="" />
                  <motion.img
                   initial={{opacity: 0, x : -35}}
                   animate={Image6}
                   ref={ref3}   
                  src="https://hugotech.co/wp-content/uploads/2023/11/Asset-48.svg" clasName='lg:w-[100px]' width={40} alt="" />
                  <motion.img
                    initial={{opacity: 0, x : -35}}
                    animate={Image7}
                    ref={ref3}   
                  src="https://hugotech.co/wp-content/uploads/2023/11/Asset-49.svg" clasName='lg:w-[100px]' width={40} alt="" />
               </div>
    </div> 
    <div className='relative w-full h-[80vh] mt-4 bg-white'>
      <img
        src="https://oqium.com/cdn/shop/files/banner2880x1620.jpg?v=1703241559&width=1220"
        alt=""
        className='w-full h-full object-cover'
      />
      <div className='absolute lg:top-60 top-52 lg:left-20 text-center text-black'>
        <h1 className=' text-3xl lg:text-4xl font-bold'>We will also add Sports <br /> Accessories in <br /> Future</h1>
      </div>
    </div>

    <div className='w-auto h-[50vh] lg:h-[50vh] lg:mt-0 mt-0 flex flex-col justify-center items-center bg-white '>
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
