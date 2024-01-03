import { motion } from 'framer-motion'
import React from 'react'

function Home() {
  return (
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
  )
}

export default Home