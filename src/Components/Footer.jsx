import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <div className='w-auto h-[10vh] border-t-2 lg:mt-16 mt-[2065px] flex justify-around items-center bg-white'>
                <div>
                <h1 className='font-semibold uppercase text-xl lg:text-2xl'>Zudio<span className='text-yellow-500'>Verse</span></h1>
                </div>
                <div className='lg:flex hidden gap-10'>
                     <a href="" className='hover:opacity-45'>Privacy Policy</a>
                     <a href="" className='hover:opacity-45'>Terms & Condition</a>
                     <a href="" className='hover:opacity-45'>Shipping</a>
                     <a href="" className='hover:opacity-45'>Returns</a>
                </div>
                <div className='flex items-center gap-3 lg:gap-4'>
                    <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a1bd99ee56a2889c0b6_bxl-facebook.svg"  className='hover:opacity-50' alt="" />
                    <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a26d99ee54c7189c0b9_bxl-twitter.svg" className='hover:opacity-50' alt="" />
                    <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a2bd99ee560bf89c0bb_bxl-instagram.svg" className='hover:opacity-50' alt="" />
                    <span><FaLinkedinIn className='text-xl hover:opacity-50 text-gray-800' /></span>
                    <span><FaGithub  className='text-xl hover:opacity-50 text-gray-800'/></span>
                </div>
    </div>
  )
}

export default Footer