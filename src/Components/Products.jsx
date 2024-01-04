import React from 'react'

function Products() {
    return (
        <div id='Products' className='w-auto h-[130vh] bg-white'>
            <div className='flex justify-center gap-8'>
                <div className='bg-gray-50 flex flex-col justify-center items-center w-[40vh] h-[55vh]'>
                    <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8d3cced3c700cde0e895_40sShortiesTextLogoTee.jpeg" width={200} alt="" />
                    <p className='text-xl text-center '>40s and Shorties <br /> T-shirt</p>
                      <p className=' mt-4 text-base'>$10.89</p>
                </div>
                <div className='bg-gray-50 flex justify-center items-center flex-col w-[40vh] h-[55vh]'>
                    <img src="	https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8de6ced3c77eaee0e8d6_UOLucienStripeKnitVolleyShort.jpeg" width={200} alt="image" />
                      <p className='text-xl'>Valley Short</p>
                      <p className=' mt-4 text-base'>$23.56</p>
                </div>
                <div className='bg-gray-50 flex flex-col justify-center items-center w-[40vh] h-[55vh]'>
                     <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8c77d99ee591668884bf_UOLongSleevePatternedFlannelShirt.jpeg" width={200} alt="" />
                     <p className='text-xl text-center '>Patterned Flannel <br /> Shirt</p>
                      <p className=' mt-4 text-base'>$45.89</p>
                </div>
                <div className='bg-gray-50 flex flex-col justify-center items-center w-[40vh] h-[55vh]'>
                     <img src="https://uploads-ssl.webflow.com/5c4b8cc3eefcd01f7e8c02dd/5c4c077825a0935fbee1b645_1.jpg" width={900} className='mt-10' alt="" />
                     <p className='text-xl mt-2 text-center '>Coat Cerry <br /> Jacket</p>
                      <p className=' mt-4 text-base'>$73.33</p>
                </div>
            </div>
            <div className='flex justify-center mt-9 gap-8'>
                <div className='bg-gray-50 flex flex-col justify-center items-center w-[40vh] h-[55vh]'>
                    <img src="	https://assets-global.website-files.com/5bf4ed555845523b870b4290/5bf584894ad02a31f916ea00_alt-5-main.png" className='mt-6' width={160} alt="" />
                    <p className='text-xl text-[#333333] text-center mt-10 '>90s and Shorties <br /> Jacket</p>
                      <p className=' mt-4 text-[#333333] text-base'>$10.89</p>
                </div>
                <div className='bg-gray-50 flex justify-center items-center flex-col w-[40vh] h-[55vh]'>
                    <img src="https://assets-global.website-files.com/5eeac043f1adfb724bac7340/5eeac043f1adfb55ecac75f0_20190619_SFP_Product_PrideTeesAndMore_Web_800x1200-35__96426.1562346474.1280.1280.jpg" className='mt-2' width={165} />
                      <p className='text-xl mt-8  text-[#333333] text-center'>ZudioVerse Grey <br /> T-Shirt</p>
                      <p className=' text-[#333333] mt-4 text-base'>$23.56</p>
                </div>
                <div className='bg-gray-50 flex flex-col justify-center items-center w-[40vh] h-[55vh]'>
                     <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8c77d99ee591668884bf_UOLongSleevePatternedFlannelShirt.jpeg" width={200} alt="" />
                     <p className='text-xl text-center '>Patterned Flannel <br /> Shirt</p>
                      <p className=' mt-4 text-base'>$45.89</p>
                </div>
                <div className='bg-gray-50 flex flex-col justify-center items-center w-[40vh] h-[55vh]'>
                     <img src="https://assets-global.website-files.com/5bf4ed555845523b870b4290/5bf5026793783654acbd0491_5-main.png" className='mt-6' width={160} alt="" />
                     <p className='text-xl text-center mt-10 '>Western Flannel <br /> Jacket</p>
                      <p className=' mt-4 text-base'>$23.33</p>
                </div>
            </div>
        </div>
    )
}

export default Products