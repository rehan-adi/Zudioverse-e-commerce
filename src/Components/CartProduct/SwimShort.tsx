import React from 'react'
import { ImTruck } from "react-icons/im";
import { TiShoppingCart } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { addItem } from './Store/Slice';

function SwimShort() {

    const Dispatch = useDispatch();
    const notify = () => toast.success("Added To Cart");

    const Submit = (item) => {
        Dispatch(addItem(item))
    };

  const item = {
    id: 5,
    name : 'Boardies® Swim Short',
    price: 20.89,
    quantity: 1,
    discount: 20.33,
    img: 'https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8bb49254e947dcc1e806_BoardiesRefresherSwimShort.jpeg',
}

  return (
    <div className='w-auto flex flex-col lg:flex-row items-center mb-14  pt-32 justify-around max-h-fit lg:h-screen'>
        <ToastContainer />
    <div className=''>
        <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8bb49254e947dcc1e806_BoardiesRefresherSwimShort.jpeg"  alt="image" className='lg:w-[300px] w-[250px]' />
    </div>
    <div className='flex justify-center lg:items-start px-6 lg:px-0 flex-col'>
        <h1 className='lg:text-5xl text-3xl lg:mt-0 mt-10 font-semibold'>Boardies® Swim <br /> Short</h1>
        <h3 className='lg:text-2xl text-xl  mt-3'>$20.89</h3>
        <p className='mt-5 text-sm lg:text-base'>Bold hues meet thick stripes in these colorblocked swim shorts <br className='lg:flex hidden' /> from Boardies®, cut above the knee and topped with an <br className='lg:flex hidden'/> adjustable drawcord waist for a perfect fit. Finished with front <br className='lg:flex hidden'/> slant pockets and a single back patch pocket with woven logo <br className='lg:flex hidden'/> tag. London-based Boardies® designs apparel + swim for those <br className='lg:flex hidden'/> who like to have fun and express their individuality.</p>
        <h3 className='font-semibold mt-5 text-black text-lg'>Size</h3>
        <select className='mt-2 bg-slate-50 py-2 outline-none px-2 border-b lg:pr-[480px]' name="cars" id="cars">
            <option value="volvo">Select Size</option>
            <option value="saab">S</option>
            <option value="mercedes">M</option>
            <option value="audi">XL</option>
            <option value="audi">2XL</option>
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

export default SwimShort