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
    <div className='w-auto flex items-center pt-24 justify-around  h-screen'>
          <ToastContainer />
    <div className=''>
        <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8d3cced3c700cde0e895_40sShortiesTextLogoTee.jpeg" width={380} alt="image" />
    </div>
    <div>
        <h1 className='text-5xl font-semibold'>40s & Shorties <br /> T- Shirt</h1>
        <h3 className='text-2xl mt-3'>$10.89</h3>
        <p className='mt-5 text-base'>
        Simplistic logo tee from 40s & Shorties, featuring a primary <br /> color rendition of their typeface logo. Cotton is cut in a  <br />standard fit and offers short sleeves and tonal, ribbed banding <br /> at crew-neck.
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
        <button className='py-3 px-4 mt-8 mr-6 bg-black hover:opacity-80 text-white' onClick={() => { notify(); Submit(item); }}>Add to Cart</button>
        <a href="https://buy.stripe.com/test_7sI6os1iJ8O4ggweUV">
        <button className='py-3 px-4 bg-white border font-semibold border-black text-center text-black'>Shop<span><TiShoppingCart className='inline-block text-xl ml-2 ' /></span></button>
        </a>
        <h1 className='mt-5 font-semibold'> <ImTruck  className='inline-block mr-2'/>Free shipping & returns in all orders.</h1>
        </div>
    </div>
</div>
  )
}

export default Tshirt40s