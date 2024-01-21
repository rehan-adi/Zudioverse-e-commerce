import React from 'react'
import { ImTruck } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SwimShort() {

  const notify = () => toast.success("Added To Cart");

  return (
    <div className='w-auto flex items-center pt-32 justify-around  h-screen'>
        <ToastContainer />
    <div className=''>
        <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8bb49254e947dcc1e806_BoardiesRefresherSwimShort.jpeg" width={380} alt="image" />
    </div>
    <div>
        <h1 className='text-5xl font-semibold'>Boardies® Swim <br /> Short</h1>
        <h3 className='text-2xl mt-3'>$20.89</h3>
        <p className='mt-5 text-base'>Bold hues meet thick stripes in these colorblocked swim shorts <br /> from Boardies®, cut above the knee and topped with an <br /> adjustable drawcord waist for a perfect fit. Finished with front <br /> slant pockets and a single back patch pocket with woven logo <br /> tag. London-based Boardies® designs apparel + swim for those <br /> who like to have fun and express their individuality.</p>
        <h3 className='font-semibold mt-5 text-black text-lg'>Size</h3>
        <select className='mt-2 bg-slate-50 py-2 px-2 border-b pr-[480px]' name="cars" id="cars">
            <option value="volvo">Select Size</option>
            <option value="saab">S</option>
            <option value="mercedes">M</option>
            <option value="audi">XL</option>
            <option value="audi">2XL</option>
        </select>
        <h3 className='font-semibold mt-5 text-black text-lg'>Quantity</h3>
        <input type="number" className='mt-3 w-16 border pl-4 py-2 ' placeholder='1' />
        <div>
        <button className='py-3 px-4 mt-8 mr-6 bg-black hover:opacity-80 text-white' onClick={() => { notify(); Submit(item); }}>Add to Cart</button>
        <button className='py-3 px-4 bg-white border font-semibold border-black text-center text-black'>Shop<span><TiShoppingCart className='inline-block text-xl ml-2 ' /></span></button>
        <h1 className='mt-5 font-semibold'> <ImTruck  className='inline-block mr-2'/>Free shipping & returns in all orders.</h1>
        </div>
    </div>
</div>
  )
}

export default SwimShort