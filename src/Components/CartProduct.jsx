import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from './CartProduct/Store/Slice';
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';

function CartProduct() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItemHandler = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className='h-[140vh] w-auto flex flex-col justify-start pt-28 items-center text-black bg-white '>
      <h1 className='text-4xl mb-16 font-semibold'>Your Cart Section</h1>
      
      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center'>
          <p className='font-semibold mb-16 text-2xl'>Your cart is empty</p>
          <FiShoppingCart className='text-[200px]' />
          <Link to="/Products">
          <button className='bg-black ml-10 mt-8 text-white px-9 py-3'>Shop</button>
          </Link>
        </div>
      ) : (
        <ul className='flex justify-center mt-20 flex-col gap-3 w-[80vw] items-center h-[220px]'>
          {cartItems.map((item) => (
            <li className='flex border-2 items-center' key={item.id}>
              <img
                src={item.img}
                alt={item.name}
                className='mr-4'
                style={{ width: '170px', height: '210px', marginLeft: '25px' }}
              />
              <div className='flex items-center px-[50px] gap-32'>
                <p className='font-semibold'>{item.name}</p>
                <p className='font-semibold'>
                  <span className='opacity-55 line-through'>$55.80</span> ${item.price}
                </p>
                <p className='font-semibold'>Quantity: {item.quantity}</p>
                <button className='bg-black text-white px-5 py-3' onClick={() => removeItemHandler(item)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartProduct;