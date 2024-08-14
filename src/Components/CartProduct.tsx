import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './CartProduct/Store/Slice';
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CartProduct() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notify = () => toast.error("Removed From Cart");

  const removeItemHandler = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className='w-full lg:w-auto lg:max-w-screen-lg mx-auto min-h-screen flex flex-col justify-start pt-28 items-center text-black bg-white'>
      <ToastContainer />
      <h1 className='lg:text-4xl text-3xl md:text-5xl mb-14 lg:mb-10  md:mt-24 lg:mt-6 mt-14 font-semibold'>Your Cart Section</h1>

      {cartItems.length === 0 ? (
        <div className='flex flex-col mt-10 items-center'>
          <p className='font-semibold mb-6 lg:mb-6 md:mb-14 lg:text-3xl md:text-4xl text-xl'>Your cart is empty</p>
          <FiShoppingCart className='text-[120px] md:text-[280px] lg:text-[210px] mb-7' />
          <Link to="/Products">
            <button className='bg-black text-white lg:ml-12 md:ml-14 lg:py-2 md:py-3 ml-5 lg:px-10 md:px-10 px-6 py-2'>Shop</button>
          </Link>
        </div>
      ) : (
        <ul className='lg:flex justify-center text-center items-center lg:mt-14 mt-10 px-10 lg:px-0 lg:flex-col lg:gap-3 w-full'>
          {cartItems.map((item) => (
            <li className='lg:flex border-2 lg:py-0 py-4 items-center mb-6' key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className='lg:mr-4  w-full'
                style={{ maxWidth: '160px', height: '200px', marginLeft: '65px' }}
              />
              <div className='lg:flex items-center lg:mt-0 mt-8 lg:px-[50px] lg:gap-32 w-full'>
                <p className='font-semibold lg:mb-0 mb-4'>{item.name}</p>
                <p className='font-semibold lg:mb-0 mb-4'>
                  <span className='opacity-55 line-through'>$55.80</span> ${item.price}
                </p>
                <p className='font-semibold lg:mb-0 mb-6 '>Quantity: {item.quantity}</p>
                <button className='bg-black text-white px-5 py-3' onClick={() => { notify(); removeItemHandler(item); }}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartProduct;
