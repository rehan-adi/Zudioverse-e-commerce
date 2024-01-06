import React from 'react'
import { ImTruck } from "react-icons/im";

function CoacJacket() {
  return (
    <div className='w-auto flex items-center pt-32 justify-around  h-screen'>
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
        <button className='py-3 px-4 mt-8 bg-black hover:opacity-80 text-white'>Add to Cart</button>
        <h1 className='mt-5 font-semibold'> <ImTruck  className='inline-block mr-2'/>Free shipping & returns in all orders.</h1>
        </div>
    </div>
</div>
  )
}

export default CoacJacket