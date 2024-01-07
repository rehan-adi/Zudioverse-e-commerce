import { motion } from 'framer-motion';
import React from 'react'
import { IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {

  const cartItems = useSelector((state) => state.cart);

  return (
    <motion.div
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className='w-full navbar h-[10vh] fixed z-50 px-28 bg-white border-b-2 items-center flex justify-between '>
      <div className='flex gap-4 items-center'>
        <h1 className='font-semibold uppercase text-2xl'>Zudio<span className='text-yellow-500'>Verse</span></h1>
      </div>
      <div className='flex uppercase items-center gap-10'>
        <Link to="/" className='relative group'>
          <span className='font-medium group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1 text-black text-base'>Home</span>
        </Link>
        <Link to="/about" className='relative group'>
          <span className='font-medium group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1 text-black text-base'>About</span>
        </Link>
        <Link to="/Products" className='relative group'>
          <span className='font-medium group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1 text-black text-base'>Products</span>
        </Link>
        <Link to="/contact" className='relative group'>
          <span className='font-medium group-hover:underline cursor-pointer underline-offset-[6px] group-hover:mt-1 text-black text-base'>Contact</span>
        </Link>
      </div>
      <div className='flex gap-5'>
        <img src="src\Components\Images\Search.svg" alt="Search" />
        <Link to="/cart">
          <img src="src\Components\Images\CART1.svg" width={23} alt="Cart" />
          <sup className='bg-black w-6 h-6 text-center rounded-full font-medium text-sm text-white absolute top-3 right-[140px] inline-flex items-center justify-center'>
            {cartItems.length}
          </sup>
        </Link>
        <span><IoIosHeartEmpty className='text-2xl' /></span>
      </div>
    </motion.div>
  )
}

export default Navbar