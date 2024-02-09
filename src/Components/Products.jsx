import React from 'react'
import { Link} from 'react-router-dom';

function Products() {
    return (
        <div className='w-auto max-h-fit pt-32 bg-white'>
             <h1 className='lg:text-4xl md:text-4xl text-3xl mb-16 lg:mt-4 md:mt-20 text-center font-semibold'>Stylish Everyday Essentials</h1>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-8'>
                <Link to='/Products/Tshirt40s'>
                <div className='bg-gray-50 border-2 hover:border-2 lg:border-2  md:border-4 hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center md:w-[75vw] w-[40vh] lg:w-[40vh] h-[65vh] lg:h-[55vh]'>
                    <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8d3cced3c700cde0e895_40sShortiesTextLogoTee.jpeg" className='lg:w-[200px] md:w-[310px]' width={200} alt="" />
                    <p className='text-xl lg:text-xl uppercase md:text-3xl font-semibold md:mb-4 lg:mb-0 text-center '>40s and Shorties <br /> T-shirt</p>
                      <p className=' mt-4 lg:text-base md:text-2xl font-medium text-base'>$10.89</p>
                </div>
                </Link>
                <Link to='/Products/VallyeShorts'>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex justify-center items-center flex-col md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 w-[40vh] h-[65vh] lg:h-[55vh]'>
                    <img src="	https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8de6ced3c77eaee0e8d6_UOLucienStripeKnitVolleyShort.jpeg" className='lg:w-[200px] md:w-[330px]' width={200} alt="image" />
                      <p className='text-xl lg:text-xl md:text-3xl uppercase font-semibold md:mb-4 lg:mb-0 '>Valley Short</p>
                      <p className=' mt-4 lg:text-base md:text-2xl font-medium text-base'>$23.56</p>
                </div>
                </Link>
                <Link to='/Products/FannelShirt'>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 w-[40vh] h-[65vh] lg:h-[55vh]'>
                     <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8c77d99ee591668884bf_UOLongSleevePatternedFlannelShirt.jpeg" width={200} className='lg:w-[200px] md:w-[300px]' alt="" />
                     <p className='text-xl text-center uppercase lg:text-xl md:text-3xl font-semibold md:mb-4 lg:mb-0 '>Patterned Flannel <br /> Shirt</p>
                      <p className=' mt-4 lg:text-base md:text-2xl font-medium text-base'>$45.89</p>
                </div>
                </Link>
                <Link to='/Products/CoacJacket'>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 w-[40vh] h-[65vh] lg:h-[55vh]'>
                     <img src="https://uploads-ssl.webflow.com/5c4b8cc3eefcd01f7e8c02dd/5c4c077825a0935fbee1b645_1.jpg"  width={900} className='lg:w-[900px] mt-10 md:w-[800px]' alt="" />
                     <p className='text-xl mt-2 md:mt-0 uppercase lg:text-xl md:text-3xl font-semibold md:mb-4 lg:mb-0 text-center '>Coat Cerry <br /> Jacket</p>
                      <p className=' mt-4 lg:text-base md:text-2xl font-medium  text-base'>$73.33</p>
                </div>
                </Link>
            </div>
            <div className='flex items-center flex-col lg:flex-row justify-center mt-9 gap-8'>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 w-[40vh] h-[65vh] lg:h-[55vh]'>
                    <img src="	https://assets-global.website-files.com/5bf4ed555845523b870b4290/5bf584894ad02a31f916ea00_alt-5-main.png" className='lg:w-[160px] mt-6 md:w-[300px]' width={160} alt="" />
                    <p className='text-xl lg:text-xl uppercase md:text-3xl font-semibold md:mb-4 lg:mb-0  text-center mt-5 '>90s and Shorties <br /> Jacket</p>
                      <p className=' mt-4 lg:text-base md:text-2xl font-medium  text-base'>$10.89</p>
                </div>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex justify-center items-center flex-col md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 w-[40vh] h-[65vh] lg:h-[55vh]'>
                    <img src="https://assets-global.website-files.com/5eeac043f1adfb724bac7340/5eeac043f1adfb55ecac75f0_20190619_SFP_Product_PrideTeesAndMore_Web_800x1200-35__96426.1562346474.1280.1280.jpg" className='lg:w-[165px] mt-2 md:w-[320px]' width={165} />
                      <p className='text-xl mt-5 lg:text-xl md:text-3xl uppercase font-semibold md:mb-4 lg:mb-0  text-center'>ZudioVerse Grey <br /> T-Shirt</p>
                      <p className='lg:text-base md:text-2xl font-medium mt-4 text-base'>$23.56</p>
                </div>
                <Link to='/Products/SwimShort'>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center w-[40vh] md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 h-[65vh] lg:h-[55vh]'>
                     <img src="https://uploads-ssl.webflow.com/5c7b453c9254e9017fc1c0d8/5c7b8bb49254e947dcc1e806_BoardiesRefresherSwimShort.jpeg" className='lg:w-[170px] mt-2 md:w-[320px]' width={200} alt="" />
                     <p className='text-xl text-center mt-5 uppercase lg:text-xl md:text-3xl font-semibold md:mb-4 lg:mb-0'>Boardies® Swim <br /> Short</p>
                      <p className=' mt-4 lg:text-base md:text-2xl font-medium text-base'>$20.89</p>
                </div>
                </Link>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center w-[40vh] md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 h-[65vh] lg:h-[55vh]'>
                     <img src="https://assets-global.website-files.com/5bf4ed555845523b870b4290/5bf5026793783654acbd0491_5-main.png" className='lg:w-[160px] mt-6 md:w-[300px]' width={160} alt="" />
                     <p className='text-xl lg:text-xl uppercase md:text-3xl font-semibold md:mb-4 lg:mb-0 text-center mt-5 '>Western Flannel <br /> Jacket</p>
                      <p className=' mt-4 lg:text-base md:text-2xl font-medium text-base'>$23.33</p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col lg:flex-row mt-9 mb-10 gap-8'>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center w-[40vh] md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 h-[65vh] lg:h-[55vh]'>
                    <img src="	https://assets-global.website-files.com/5bf4ed555845523b870b4290/5bf584894ad02a31f916ea00_alt-5-main.png" className='lg:w-[160px] mt-6 md:w-[300px]' width={160} alt="" />
                    <p className='text-xl lg:text-xl uppercase md:text-3xl font-semibold md:mb-4 lg:mb-0 text-center mt-5 '>90s and Shorties <br /> Jacket</p>
                      <p className=' mt-4 lg:text-base md:text-2xl font-medium text-base'>$10.89</p>
                </div>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex justify-center items-center flex-col w-[40vh] md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 h-[65vh] lg:h-[55vh]'>
                    <img src="https://assets-global.website-files.com/5eeac043f1adfb724bac7340/5eeac043f1adfb55ecac75f0_20190619_SFP_Product_PrideTeesAndMore_Web_800x1200-35__96426.1562346474.1280.1280.jpg" className='lg:w-[165px] mt-2 md:w-[320px]' width={165} />
                      <p className='text-xl mt-5 lg:text-xl md:text-3xl uppercase font-semibold md:mb-4 lg:mb-0  text-center'>ZudioVerse Grey <br /> T-Shirt</p>
                      <p className='lg:text-base md:text-2xl font-medium mt-4 text-base'>$23.56</p>
                </div>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center w-[40vh] md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2 h-[65vh] lg:h-[55vh]'>
                     <img src="https://assets.website-files.com/5eeac043f1adfb724bac7340/5eeac043f1adfb5ca9ac7615_2016.6.22_SFP_Photoshoot1851b__92743.1467324920.1280.1280-p-500.jpeg" width={200} className='lg:w-[165px] mt-2 md:w-[320px]' alt="" />
                     <p className='text-xl text-center uppercase mt-4 lg:text-xl md:text-3xl font-semibold md:mb-4 lg:mb-0 '>Red Americano<br /> Bag</p>
                      <p className='mt-4 lg:text-base md:text-2xl font-medium text-base'>$45.89</p>
                </div>
                <div className='bg-gray-50 border-2 hover:border-2 hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center w-[40vh] md:w-[75vw] lg:w-[40vh] md:border-4 lg:border-2  h-[65vh] lg:h-[55vh]'>
                     <img src="https://assets-global.website-files.com/5bef4f05df7c091d0a2bf416/5bef4f05df7c09d7672bf41b_ezgif.com-webp-to-jpg.jpg" className='lg:w-[160px] mt-6 md:w-[345px]' width={160} alt="" />
                     <p className='text-xl lg:text-xl md:text-3xl font-semibold md:mb-4 lg:mb-0  text-center mt-10 '>STEFAN JANOSKI <br />PREMIUM </p>
                      <p className=' mt-4 lg:text-base md:text-2xl font-medium text-base'>$23.33</p>
                </div>
            </div>
        </div>
    )
}

export default Products