import React from 'react'
import { useSelector } from 'react-redux'

function CartProduct() {

  const selector = useSelector((state) => state.cart);

  return (
    <div className='h-screen w-auto flex justify-center items-center text-5xl text-black bg-white '>
          <h1>This is Cart Section</h1>
          <ul className='text-red-500'>
        {selector.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CartProduct