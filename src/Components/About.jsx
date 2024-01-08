import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './CartProduct/swiper.css';

function About() {
  return (
    <div id='about' className='w-auto flex justify-center pt-28 items-center flex-col h-[260vh] bg-white'>
      <h1 className='text-4xl font-semibold'>About ZUDIOVERSE</h1>
      <p className='text-center line mt-6'>We are a lifestyle retailer dedicated to inspiring customers through a unique <br /> combination of product, creativity and cultural understanding. Founded in 1970 in a <br /> small space across the street from the University of Pennsylvania.</p>
      <p className='text-center line mt-6'> <span className='text-black font-semibold'>ZUDIOVERSE</span> now operates over 200 stores in the United States, Canada and Europe, <br /> offering experiential retail environments and a well-curated mix men's product <br /> assortments.</p>
      <div className='flex gap-96 pb-9 pt-24 items-center'>
        <div className=''>
          <h1 className='text-5xl mad font-semibold'>WE EMPOWER YOU TO <br /> MOVE COMFORTABLY</h1>
          <p className='text-lg mt-7 opacity-70'>At Athletics, we're about creating products that <br /> amplify your workouts. Lorem ipsum dol amet, <br /> consectetur piscis rabitur cursus lectus por.</p>
          <button className='py-3 px-4 mt-8 bg-black hover:opacity-80 text-white'>Explore</button>
        </div>
        <div>
          <img src="https://assets.website-files.com/61983c3a41be5bad7444a3c0/61f2e70177f8584393e77273_Image020%201.jpg" className='rotate-6' width={180} alt="" />
        </div>
      </div>
      <div className='flex gap-28 mt-8 mb-5 items-center'>
        <div>
          <img src="https://assets.website-files.com/61983c3a41be5bad7444a3c0/61f2e7539d538babf0f423db_Image021%201.jpg" className='' width={480} alt="" />
        </div>
        <div>
          <h3 className='mb-5 text-lg opacity-60'>OUR FOUNDER</h3>
          <h1 className='text-5xl mad font-semibold'>BEAUTY <br /> BEHIND <br />
            THE MADNESS</h1>
            <p className='text-lg mt-7 opacity-70'>Rehan started this company in his room <br /> apartment. Rabitur cursus ut lectus porta <br /> placerat. Vamus quaise facilisis nulla id dui <br /> ague sellus portor.</p>
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
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
        <SwiperSlide>
          <h1 className='text-6xl mb-6 font-semibold'>"YOUR BIKER SHORTS <br /> ARE MY GO TO <br /> RUNNING WEAR EVERY <br /> DAY."</h1>
          <p className='text-xl opacity-60'>SARAH CALSEY</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className='text-6xl mb-6 font-semibold'>
            "I'VE BOUGHT TWO <br /> PAIRS AND NOW I CAN'T <br /> LIVE WITHOUT THEM."
          </h1>
          <p className='text-xl opacity-60'>EMILY COLSEN</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className='text-6xl mb-6 font-semibold'>"THE SHORTS WERE <br /> JUST WHAT I NEEDED <br /> TO GET ACTIVE <br /> OUTSIDE."</h1>
          <p className='text-xl opacity-60'>TAYLOR FLUTTER</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default About