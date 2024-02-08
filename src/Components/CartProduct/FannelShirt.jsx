import React from 'react'
import { ImTruck } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { addItem } from './Store/Slice';
import { TiShoppingCart } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FannelShirt() {

    const Dispatch = useDispatch();
    const notify = () => toast.success("Added To Cart");

    const Submit = (item) => {
      Dispatch(addItem(item));
      };

      const item = {
        id: 1,
        name: 'Patterned Flannel Shirt',
        price: 45.89,
        quantity: 1,
        img: 'https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8c77d99ee591668884bf_UOLongSleevePatternedFlannelShirt.jpeg'
      };
  
    

  return (
    <div className='w-auto flex flex-col lg:flex-row mb-14 lg:mb-0 items-center pt-20 justify-around lg:h-screen  max-h-fit'>
        <ToastContainer />
    <div className=''>
        <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8c77d99ee591668884bf_UOLongSleevePatternedFlannelShirt.jpeg" className='lg:w-[350px] w-[250px]' alt="image" />
    </div>
    <div className='flex px-6 lg:px-0 justify-center lg:items-start flex-col'>
        <h1 className='lg:text-5xl text-3xl font-semibold'>Patterned Flannel <br /> Shirt</h1>
        <h3 className='text-2xl mt-3'>$45.89</h3>
        <p className='mt-5 text-base'>
        Long sleeve patterned flannel shirt from Urban Outfitters. Full- <br />length front button closure with pointed collar. Finished with <br /> rounded hem + patch pocket at chest.
            </p>
        <h3 className='font-semibold mt-5 text-black text-lg'>Size</h3>
        <select className='mt-2 bg-slate-50 py-2 px-2 border-b lg:pr-[480px]' name="cars" id="cars">
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
        <button className='py-3 px-4  bg-white border font-semibold border-black text-center text-black'>Shop<span><TiShoppingCart className='inline-block text-xl ml-2 ' /></span></button>
        <h1 className='mt-5 text-xs lg:text-base font-semibold'> <ImTruck  className='inline-block mr-2'/>Free shipping & returns in all orders.</h1>
        </div>
    </div>
</div>
  )
}

export default FannelShirt