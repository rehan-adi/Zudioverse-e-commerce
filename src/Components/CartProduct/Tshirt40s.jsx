import React from 'react'
import { ImTruck } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { addItem } from './Store/Slice';
import { TiShoppingCart } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Tshirt40s() {

    const Dispatch = useDispatch();
    const notify = () => toast.success("Added To Cart");

    const Submit = (item) => {
        Dispatch(addItem(item))
    };

    const item = {
        id: 3,
        name : '40s & Shorties T-Shirt',
        price: 10.89,
        quantity: 1,
        discount: 20.33,
        img: 'https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8d3cced3c700cde0e895_40sShortiesTextLogoTee.jpeg'
    };

  return (
    <div className='w-auto flex flex-col lg:mb-0 mb-14 items-center lg:flex-row lg:pt-24 md:pt-40 pt-24 justify-around lg:h-screen max-h-fit'>
          <ToastContainer />
    <div className=''>
        <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8d3cced3c700cde0e895_40sShortiesTextLogoTee.jpeg" className='lg:w-[380px] md:w-[400px] w-[250px] ' alt="image" />
    </div>
    <div className='flex justify-center lg:items-start px-6 md:px-10 lg:px-0 flex-col'>
        <h1 className='lg:text-5xl text-3xl md:text-4xl lg:mt-0 mt-10 md:mt-20 font-semibold'>40s & Shorties <br className='flex md:hidden lg:flex'/> T- Shirt</h1>
        <h3 className='lg:text-2xl md:text-2xl text-xl lg:mt-3 md:mt-5 mt-3'>$10.89</h3>
        <p className='mt-5 text-sm md:text-lg lg:text-base'>
        Simplistic logo tee from 40s & Shorties, featuring a primary <br /> color rendition of their typeface logo. Cotton is cut in a  <br />standard fit and offers short sleeves and tonal, ribbed banding <br /> at crew-neck.
            </p>
        <h3 className='font-semibold mt-5 text-black lg:text-lg md:text-xl text-lg'>Size</h3>
        <select className='mt-2 lg:mt-2 md:mt-5 bg-slate-50 py-2 px-2 border-b outline-none lg:pr-[480px]' name="cars" id="cars">
            <option value="volvo">Select Size</option>
            <option value="saab">S</option>
            <option value="mercedes">M</option>
            <option value="audi">L</option>
            <option value="audi">XL</option>
        </select>
        <h3 className='font-semibold mt-5 lg:mt-5 md:mt-12 text-black lg:text-lg md:text-xl text-lg'>Quantity</h3>
        <input type="number" className='mt-3 lg:mt-3 md:mt-5 w-16 outline-none border pl-4 py-2 ' placeholder='1' />
        <div>
        <button className='py-3 px-3 lg:px-4 mt-8 mr-6 bg-black hover:opacity-80 text-white' onClick={() => { notify(); Submit(item); }}>Add to Cart</button>
        <a href="https://buy.stripe.com/test_7sI6os1iJ8O4ggweUV">
        <button className='py-3 px-3 lg:px-4 bg-white border font-semibold border-black text-center text-black'>Shop<span><TiShoppingCart className='inline-block ml-2 lg:text-xl' /></span></button>
        </a>
        <h1 className='mt-5 lg:mt-5 md:mt-7 text-xs lg:text-base md:text-lg font-semibold'> <ImTruck  className='inline-block mr-2'/>Free shipping & returns in all orders.</h1>
        </div>
    </div>
</div>
  )
}

export default Tshirt40s