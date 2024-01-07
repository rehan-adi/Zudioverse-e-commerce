import React from 'react'
import { ImTruck } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { addItem } from './Store/Slice';
import { AiOutlineHeart } from "react-icons/ai";

function FannelShirt() {

    const Dispatch = useDispatch();

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
    <div className='w-auto flex items-center pt-20 justify-around  h-screen'>
    <div className=''>
        <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8c77d99ee591668884bf_UOLongSleevePatternedFlannelShirt.jpeg" width={350} alt="image" />
    </div>
    <div>
        <h1 className='text-5xl font-semibold'>Patterned Flannel <br /> Shirt</h1>
        <h3 className='text-2xl mt-3'>$45.89</h3>
        <p className='mt-5 text-base'>
        Long sleeve patterned flannel shirt from Urban Outfitters. Full- <br />length front button closure with pointed collar. Finished with <br /> rounded hem + patch pocket at chest.
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
        <button className='py-3 px-4 mt-8 mr-6 bg-black hover:opacity-80 text-white' onClick={() => Submit(item)} >Add to Cart</button>
        <button className='py-3 px-4  bg-white border font-semibold border-black text-center text-black'>Wishlist<span><AiOutlineHeart className='inline-block ml-2 ' /></span></button>
        <h1 className='mt-5 font-semibold'> <ImTruck  className='inline-block mr-2'/>Free shipping & returns in all orders.</h1>
        </div>
    </div>
</div>
  )
}

export default FannelShirt