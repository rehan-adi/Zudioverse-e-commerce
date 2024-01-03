import { motion } from 'framer-motion';
import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <motion.div 
    initial={{opacity: 0, y: -1000}}
    animate={{opacity: 1, y: 0}}
    transition={{duration: 2}}
    className='w-full navbar h-[10vh] fixed z-50 px-28 bg-white border-b-2 items-center flex justify-between '>
       <div className='flex gap-4 items-center'>
       <h1 className='font-semibold uppercase text-2xl'>Zudio<span className='text-yellow-500'>Verse</span></h1>
       </div>
       <div className='flex uppercase items-center gap-10'>
           <Link to="home" spy={true} offset={10} smooth={true} duration={1000} className='relative group'>
            <span className='font-medium group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1 text-black text-base'>Home</span>
           </Link>
           <Link to="about" spy={true} smooth={true} offset={10} duration={1000} className='relative group'>
            <span className='font-medium group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1 text-black text-base'>About</span>
           </Link>
           <Link to="Products" spy={true} smooth={true} offset={10} duration={1000} className='relative group'>
            <span className='font-medium group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1 text-black text-base'>Products</span>
           </Link>
           <Link to="contact" spy={true} smooth={true} offset={10} duration={1500} className='relative group'>
            <span className='font-medium group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1 text-black text-base'>Contact</span>
           </Link>
       </div>
       <div className='flex gap-5'>
        <img src="	src\Components\Images\Search.svg" alt="Search" />
          <img src="src\Components\Images\CART1.svg" width={20} alt="Cart" />
          <span><IoIosHeartEmpty className='text-2xl' /></span>
       </div>
    </motion.div>
  )
}

export default Navbar