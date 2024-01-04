import React from 'react'

function Tshirt40s() {
  return (
    <div className='w-auto flex items-center justify-around  h-screen'>
    <div className=''>
        <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8d3cced3c700cde0e895_40sShortiesTextLogoTee.jpeg" width={485} alt="image" />
    </div>
    <div>
        <h1 className='text-5xl font-semibold'>40s & Shorties <br /> T- Shirt</h1>
        <h3 className='text-3xl mt-4'>$10.89</h3>
        <p className='mt-10 text-base'>
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
        <button className='py-3 px-4 mt-8 bg-black hover:opacity-80 text-white'>Add to Cart</button>
        </div>
    </div>
</div>
  )
}

export default Tshirt40s