import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './CartProduct/swiper.css';

function About() {
  return (
    <div id='about' className='w-auto flex justify-center pt-16 items-center flex-col h-[150vh] bg-white'>
      <h1 className='text-4xl font-semibold'>About ZUDIOVERSE</h1>
      <p className='text-center line mt-6'>We are a lifestyle retailer dedicated to inspiring customers through a unique <br /> combination of product, creativity and cultural understanding. Founded in 1970 in a <br /> small space across the street from the University of Pennsylvania.</p>
      <p className='text-center line mt-6'> <span className='text-black font-semibold'>ZUDIOVERSE</span> now operates over 200 stores in the United States, Canada and Europe, <br /> offering experiential retail environments and a well-curated mix men's product <br /> assortments.</p>
      <p className='mt-14 text-xl font-semibold opacity-85'>OUR STORY</p>
      <h1 className='text-4xl mt-3 font-semibold'>STARTED FROM
        THE BOTTOM</h1>
      <p className='mt-6 text-center'>Now we're here. Consectetur piscis elit Rabitur cursus ut lectus porta placerat. Vivamus quis facilisis <br /> nulla id dui augue sellus porttitor. Fabrics and gear made for every workout. Find the right athletic <br /> wear to reach new goals in comfort. Our innovative fabric gives you the comfort to flow through <br /> your goals in every movement and find a better work.</p>
      <p className='text-center mb-5 mt-3'>we're about creating products that amplify your workouts. Lorem ipsum dol amet, consectetur <br /> piscis rabitur cursus lectus por.</p>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h1 className='text-6xl mb-6 font-semibold'>"SUPERIOR TO OTHER <br /> ATHLETIC WEAR, GOING <br /> TO BUY MORE."</h1>
          <p className='text-xl opacity-60'>JENNY HARLEM</p>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default About