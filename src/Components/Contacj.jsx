import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


function Contacj() {
    return (
        <div id='contact'  className='h-[144vh] mt-10 w-auto  bg-white'>


            <div className='flex items-center flex-col'>
                <div className=''>
                    <h1 className='text-4xl mb-10 font-semibold'>Get in Touch with Us</h1>
                </div>
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202845.2009650676!2d-122.20590798781525!3d37.40268917507762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd4b50e!2sSilicon%20Valley%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1703760435545!5m2!1sen!2sin" width="1280" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                  <div className='flex justify-center mt-4 gap-10 items-center'>
                <div className='bg-[#f3f3f3] flex justify-center items-center flex-col w-[25vw] h-[75vh]'>
                <div>
                    <p>
                        <span><FiPhoneCall className='inline-block mr-3 text-2xl ' /></span>+1234-567-8910</p>
                </div>
                <div className='mt-10'>
                    <span><MdOutlineMail className='inline-block text-2xl' /></span> user@gmail.com
                </div>
                <div className='mt-10 text-center'>
                    <span><SiGooglemaps className='inline-block text-2xl' /></span>  Silicon Vallye
                </div>
                <div className='mt-10 text-3xl font-semibold'>
                    <h1>Follow Us</h1>
                    <div className='flex justify-center items-center gap-3 mt-6'>
                    <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a1bd99ee56a2889c0b6_bxl-facebook.svg"  className='hover:opacity-50' alt="" />
                    <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a26d99ee54c7189c0b9_bxl-twitter.svg" className='hover:opacity-50' alt="" />
                    <img src="https://uploads-ssl.webflow.com/5c7b4529d99ee5d38a884f51/5c7c7a2bd99ee560bf89c0bb_bxl-instagram.svg" className='hover:opacity-50' alt="" />
                    <span><FaLinkedinIn className='text-xl hover:opacity-50 text-gray-800' /></span>
                    <span><FaGithub  className='text-xl hover:opacity-50 text-gray-800'/></span>
                    </div>
                </div>
                </div>
                <div className='bg-[#f3f3f3] flex justify-center items-center flex-col w-[56vw] h-[75vh]'>
                <div>
                       <h1 className='text-2xl mr-[355px] font-semibold'>Fell Free to Talk</h1>
                </div>
                <div className='mt-7 flex gap-5 '>
                    <input type="text" name="" id="" placeholder='Name*' className='pr-20 bg-transparent border-gray-400 pl-4 py-2 border' />
                    <input type="text" name="" id="" placeholder='Email*' className='pr-20 border border-gray-400 bg-transparent pl-4' />
                </div>
                <div className='mt-5 text-center'>
                <input type="text" name="" id="" placeholder='Subject*' className='pr-[390px] pl-4 bg-transparent py-2 border border-gray-400' />
                </div>
                <div className='mt-5'>
                     <textarea name="" id="" placeholder='Your Message*' className='p-6 bg-transparent border border-gray-400 ' cols="55" rows="6"></textarea>
                </div>
                  <div>
                       <button className='bg-black py-2 px-12 hover:opacity-80 mr-[468px] mt-5 text-white'>Send</button>
                  </div>
                </div>
                </div>
            </div>


        </div>
    )
}

export default Contacj