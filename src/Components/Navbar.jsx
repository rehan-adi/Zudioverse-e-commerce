import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";

function Navbar() {
  const cartItems = useSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -1000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      className='w-full navbar h-[10vh] fixed z-50 lg:px-28 px-7 bg-white border-b-2 items-center flex justify-between'>
      <div className='flex gap-4 items-center'>
        {/* Logo */}
        <h1 className='font-semibold uppercase text-xl lg:text-2xl'>
          Zudio<span className='text-yellow-500'>Verse</span>
        </h1>
      </div>
      <div className='flex lg:hidden'>
          {/* Hamburger Menu Icon */}
          <p onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaBarsStaggered className='text-2xl cursor-pointer' />
          </p>
      </div>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-0 right-0 w-full h-full bg-white z-50 flex flex-col items-end">
          <Link to="/" className='nav-link'>Home</Link>
          <Link to="/about" className='nav-link'>About</Link>
          <Link to="/Products" className='nav-link'>Products</Link>
          <Link to="/contact" className='nav-link'>Contact</Link>
          {/* Add other navigation links as needed */}
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
            <div className="absolute flex top-[78px] right-52 p-3 bg-white border border-slate-50 w-60">
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
          <sup className='bg-black w-6 h-6 text-center rounded-full font-medium text-sm text-white absolute top-3 right-[140px] inline-flex items-center justify-center'>
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
