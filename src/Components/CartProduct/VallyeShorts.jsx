import React from 'react'

function VallyeShorts() {
    return (
        <div className='w-auto flex items-center justify-around  h-screen'>
            <div className=''>
                <img src="	https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8de6ced3c77eaee0e8d6_UOLucienStripeKnitVolleyShort.jpeg" width={485} alt="image" />
            </div>
            <div>
                <h1 className='text-5xl font-semibold'>Lucien Stripe Knit <br /> Volley Short</h1>
                <h3 className='text-3xl mt-4'>$39.00</h3>
                <p className='mt-10 text-base'>Easy pull on + go short in an allover vertical stripe pattern. <br />  Soft textured cotton is cut in a silhouette that hits above the <br /> knee with a split hem, featuring an elastic waist + adjustable <br /> exterior drawstring for a comfortable fit. Complete with front <br /> slip pockets and back patch pockets. Get them only at Urban <br /> Outfitters.</p>
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

export default VallyeShorts