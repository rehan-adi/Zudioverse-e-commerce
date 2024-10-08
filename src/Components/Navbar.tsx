import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { RootState } from './CartProduct/Store/StoreR';

function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className='w-full navbar h-[10vh] fixed z-50 lg:px-32 md:px-20 px-7 bg-white border-b-2 items-center flex justify-between'>
      <div className='flex gap-4 items-center'>
        {/* Logo */}
        <h1 className='font-semibold md:text-3xl uppercase text-xl lg:text-2xl'>
          Zudio<span className='text-yellow-500'>Verse</span>
        </h1>
      </div>
      <div className='flex lg:hidden'>
        {/* Hamburger Menu Icon */}
        <p onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBarsStaggered className='text-2xl md:text-4xl cursor-pointer' />
        </p>
      </div>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-[60vw] h-full bg-white text-black z-50 flex flex-col items-end">
          <button className='bg-red-500 text-white md:px-6 md:py-3 md:mt-7 md:mr-16 px-4 py-2 rounded mt-4 mr-5' onClick={() => setIsMenuOpen(false)}>
          <GrClose />
          </button>
          <div className='flex justify-center items-center mt-20 pr-2 gap-7 md:gap-10 flex-col'>
          <Link to="/" className='nav-link text-xl md:text-3xl'>Home</Link>
          <Link to="/about" className='nav-link text-xl md:text-3xl'>About</Link>
          <Link to="/Products" className='nav-link text-xl md:text-3xl'>Products</Link>
          <Link to="/contact" className='nav-link text-xl md:text-3xl'>Contact</Link>
          </div>
          {/* Add other navigation links and buttons as needed */}
          {/* Search Bar */}
          <div className="relative mt-16">
            {isSearchVisible && (
              <div className="absolute flex top-[-20px] right-12 p-3 bg-white border border-slate-50 w-44">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border p-2 w-full"
                />
                <button className='bg-yellow-500 px-2 '>
                  <img src="src\Components\Images\Search.svg" alt="" />
                </button>
              </div>
            )}
            <img
              src="src\Components\Images\Search.svg"
              alt="Search"
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              style={{ cursor: 'pointer' }}
              className='pr-4 md:w-[60px]'
            />
          </div>
          {/* Cart Icon */}
          <Link to="/cart" className='mt-4 pr-4'>
            <img
              src="src\Components\Images\CART1.svg"
              width={23}
              className='md:w-[40px]'
              alt="Cart"
            />
            <sup className='bg-black w-6 h-6 md:h-9 md:w-8 text-center rounded-full font-medium md:text-base text-sm text-white absolute lg:absolute top-[415px] md:top-[518px] md:right-12 right-9 inline-flex items-center justify-center'>
              {cartItems.length}
            </sup>
          </Link>
          {/* Heart Icon */}
          <span className='mt-4 md:pr-3 pr-4'><IoIosHeartEmpty className='text-2xl font-bold md:text-5xl' /></span>
        </div>
      )}
      <div className='lg:flex uppercase hidden items-center gap-10'>
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
      <div className='lg:flex hidden gap-5'>
        {/* Search Bar */}
        <div className="relative">
          {isSearchVisible && (
            <div className="absolute flex top-[50px] right-2 p-3 bg-white border border-slate-50 w-60">
              <input
                type="text"
                placeholder="Search..."
                className="border p-2 w-full"
              />
              <button className='bg-yellow-500 px-4 '>
                <img src="src\Components\Images\Search.svg" alt="" />
              </button>
            </div>
          )}
          <img
            src="src\Components\Images\Search.svg"
            alt="Search"
            onClick={() => setIsSearchVisible(!isSearchVisible)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        {/* Cart Icon */}
        <Link to="/cart">
          <img
            src="src\Components\Images\CART1.svg"
            width={23}
            alt="Cart"
          />
          <sup className='bg-black w-6 h-6 text-center rounded-full font-medium text-sm text-white absolute top-3 right-[189px] inline-flex items-center justify-center'>
            {cartItems.length}
          </sup>
        </Link>
        {/* Heart Icon */}
        <span><IoIosHeartEmpty className='text-2xl' /></span>
      </div>
    </motion.div>
  );
}

export default Navbar;
