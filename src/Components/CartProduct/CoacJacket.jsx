import React from 'react'
import { ImTruck } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { addItem } from './Store/Slice';
import { AiOutlineHeart } from "react-icons/ai";

function CoacJacket() {

    const Dispatch = useDispatch();

    const Submit = (item) => {
        Dispatch(addItem(item))
    };

    const item = {
        id: 4,
        name : '40s & Shorties T-Shirt',
        price: 73.33,
        quantity: 1,
        discount: 20.33,
        img: 'https://uploads-ssl.webflow.com/5c4b8cc3eefcd01f7e8c02dd/5c4c077825a0935fbee1b645_1.jpg',
    }

  return (
    <div className='w-auto flex items-center pt-20 justify-around  h-screen'>
    <div className=''>
        <img src="https://uploads-ssl.webflow.com/5c4b8cc3eefcd01f7e8c02dd/5c4c077825a0935fbee1b645_1.jpg" width={450} alt="image" />
    </div>
    <div>
        <h1 className='text-5xl font-semibold'>Coat Cerry <br /> Jacket</h1>
        <h3 className='text-2xl mt-3'>$73.33</h3>
        <p className='mt-5 text-base'>
        Long sleeve patterned leather Jacket from Coat cerry. Full- <br />length front button closure with pointed collar. Finished with <br /> rounded hem + patch pocket at side. In black color with pure <br /> lether.
            </p>
        <h3 className='font-semibold mt-5 text-black text-lg'>Size</h3>
        <select className='mt-2 bg-slate-50 py-2 px-2 border-b pr-[480px]' name="cars" id="cars">
            <option value="volvo">Select Size</option>
            <option value="saab">S</option>
            <option value="mercedes">M</option>
            <option value="audi">L</option>
            <option value="audi">XL</option>
        </select>
        <h3 className='font-semibold mt-5 text-black text-lg'>Quantity</h3>
        <input type="number" className='mt-3 w-16 border pl-4 py-2 ' placeholder='1' />
        <div>
        <button className='py-3 px-4 mr-6 mt-8 bg-black hover:opacity-80 text-white' onClick={() => Submit(item)} >Add to Cart</button>
        <button className='py-3 px-4 bg-white border font-semibold border-black text-center text-black'>Wishlist<span><AiOutlineHeart className='inline-block ml-2 ' /></span></button>
        <h1 className='mt-5 font-semibold'> <ImTruck  className='inline-block mr-2'/>Free shipping & returns in all orders.</h1>
        </div>
    </div>
</div>
  )
}

export default CoacJacket