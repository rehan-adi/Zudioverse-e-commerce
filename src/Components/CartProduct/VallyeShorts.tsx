import React from 'react'
import { ImTruck } from "react-icons/im";
import { useDispatch } from 'react-redux';
import { addItem } from './Store/Slice';
import { TiShoppingCart } from "react-icons/ti";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Item } from '@/interfaces/interface';

function VallyeShorts() {

    const Dispatch = useDispatch();
    const notify = () => toast.success("Added To Cart");

   const Submit = (item: Item) => {
      Dispatch(addItem(item));
      };


    const item: Item = {
        id: '2',
        name: ' Lucien Knit Valley Short',
        price: 39.10,
        quantity: 1,
        img: 'https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8de6ced3c77eaee0e8d6_UOLucienStripeKnitVolleyShort.jpeg'
      };

    return (
        <div className='w-auto flex items-center pt-32 lg:pt-32 md:pt-44 flex-col lg:flex-row mb-14 justify-around max-h-fit lg:h-screen'>
         <ToastContainer />
            <div className=''>
                <img src="	https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8de6ced3c77eaee0e8d6_UOLucienStripeKnitVolleyShort.jpeg" className='lg:w-[380px] md:w-[400px] w-[250px] ' alt="image" />
            </div>
            <div className='flex justify-center lg:items-start px-6 lg:px-0 md:px-10 flex-col'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl lg:mt-0 md:mt-20 mt-10 font-semibold'>Lucien Stripe Knit <br className='flex lg:flex md:hidden'/> Valley Short</h1>
                <h3 className='text-xl md:text-2xl lg:text-2xl mt-3'>$39.10</h3>
                <p className='mt-5 text-sm md:text-lg lg:text-base'>Easy pull on + go short in an allover vertical stripe pattern. <br className='lg:flex hidden' />  Soft textured cotton is cut in a silhouette that hits above the <br className='lg:flex hidden' /> knee with a split hem, featuring an elastic waist + adjusts <br className='lg:flex hidden' /> exterior drawstring for a comfortable fit. Complete with front <br  className='lg:flex hidden'/> slip pockets and back patch pockets. Get them only at Urban <br className='lg:flex hidden' /> Outfitters.</p>
                <h3 className='font-semibold mt-5 lg:mt-5 md:mt-7 text-black lg:text-lg md:text-xl text-lg'>Size</h3>
                <select className='mt-2 bg-slate-50 py-2 px-2 outline-none border-b pr-6 lg:pr-[480px]' name="cars" id="cars">
                    <option value="volvo">Select Size</option>
                    <option value="saab">S</option>
                    <option value="mercedes">M</option>
                    <option value="audi">L</option>
                    <option value="audi">XL</option>
                </select>
                <h3 className='font-semibold mt-5 lg:mt-5 md:mt-12 text-black lg:text-lg md:text-xl text-lg'>Quantity</h3>
                <input type="number" className='mt-3 w-16 outline-none border pl-4 py-2 ' placeholder='1' />
                <div>
                <button className='py-3 px-3 lg:px-4 mt-8 mr-6 bg-black hover:opacity-80 text-white' onClick={() => { notify(); Submit(item); }}>Add to Cart</button>
                <a href="https://buy.stripe.com/test_3csbIMd1raWc9S85kk">
                <button className='py-3 px-3 lg:px-4 bg-white border font-semibold border-black text-center text-black'>Shop<span><TiShoppingCart className='inline-block ml-2 lg:text-xl' /></span></button>
                </a>
                <h1 className='mt-5 lg:mt-5 md:mt-7 text-xs lg:text-base md:text-lg font-semibold'> <ImTruck  className='inline-block mr-2'/>Free shipping & returns in all orders.</h1>
                </div>
            </div>
        </div>
    )
}

export default VallyeShorts