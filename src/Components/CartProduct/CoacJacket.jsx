import React from 'react'
import { ImTruck } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { addItem } from './Store/Slice';
import { TiShoppingCart } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CoacJacket() {

    const Dispatch = useDispatch();
    const notify = () => toast.success("Added To Cart");

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
    <div className='w-auto flex-col lg:flex-row flex items-center mb-14 lg:mb-0 pt-20 justify-around max-h-fit lg:h-screen'>
         <ToastContainer />
    <div className=''>
        <img src="https://uploads-ssl.webflow.com/5c4b8cc3eefcd01f7e8c02dd/5c4c077825a0935fbee1b645_1.jpg" width={450} alt="image" />
    </div>
    <div className='flex justify-center lg:items-start px-6 lg:px-0 flex-col'>
        <h1 className='lg:text-5xl text-3xl lg:mt-0 mt-10 font-semibold'>Coat Cerry <br /> Jacket</h1>
        <h3 className='lg:text-2xl text-xl  mt-3'>$73.33</h3>
        <p className='mt-5 text-sm lg:text-base'>
        Long sleeve patterned leather Jacket from Coat cerry. Full- <br className='lg:flex hidden'/>length front <br className='lg:hidden flex' /> button closure with pointed collar. Finished with <br className='lg:flex hidden' /> rounded hem + patch pocket at side. In black color <br className='flex lg:hidden' /> with pure <br className='lg:flex hidden'/> lether.
            </p>
        <h3 className='font-semibold mt-5 text-black text-lg'>Size</h3>
        <select className='mt-2 bg-slate-50 py-2 outline-none px-2 border-b lg:pr-[480px]' name="cars" id="cars">
            <option value="volvo">Select Size</option>
            <option value="saab">S</option>
            <option value="mercedes">M</option>
            <option value="audi">L</option>
            <option value="audi">XL</option>
        </select>
        <h3 className='font-semibold mt-5 text-black text-lg'>Quantity</h3>
        <input type="number" className='mt-3 w-16 outline-none border pl-4 py-2 ' placeholder='1' />
        <div>
        <button className='py-3 px-3 lg:px-4 mt-8 mr-6 bg-black hover:opacity-80 text-white' onClick={() => { notify(); Submit(item); }}>Add to Cart</button>
        <button className='py-3 px-3 lg:px-4 bg-white border font-semibold border-black text-center text-black'>Shop<span><TiShoppingCart className='inline-block ml-2 lg:text-xl' /></span></button>
        <h1 className='mt-5 text-xs lg:text-base font-semibold'> <ImTruck  className='inline-block mr-2'/>Free shipping & returns in all orders.</h1>
        </div>
    </div>
</div>
  )
}

export default CoacJacket