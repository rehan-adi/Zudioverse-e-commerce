import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CartProduct/swiper.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div
      id="about"
      className="w-auto flex lg:px-0 px-3 mb-9 lg:mb-0 justify-center md:pt-[180px] pt-[120px] lg:pt-32 items-center flex-col lg:h-[260vh] bg-white"
    >
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className=" text-2xl lg:text-4xl md:text-5xl font-semibold"
      >
        About ZUDIOVERSE
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="text-center lg:text-base md:text-2xl md:mt-16 text-sm line mt-6"
      >
        We are a lifestyle retailer dedicated to inspiring customers through a
        unique <br className="md:hidden lg:flex" /> combination of product,
        creativity and cultural understanding. Founded{" "}
        <br className="md:flex lg:hidden" /> in 1970 in a{" "}
        <br className="hidden lg:flex" /> small space across the street from the
        University of Pennsylvania.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        className="text-center lg:text-base md:text-2xl md:mt-10 text-sm line mt-6"
      >
        {" "}
        <span className="text-black font-semibold">ZUDIOVERSE</span> now
        operates over 200 stores in the United States, Canada and Europe,{" "}
        <br className="md:hidden lg:flex" /> offering experiential retail
        environments and a <br className="md:flex lg:hidden" /> well-curated mix
        men's product <br className="lg:flex hidden" /> assortments.
      </motion.p>
      <div className="flex gap-20 lg:gap-96 flex-col lg:flex-row md:mt-16 lg:mt-7 pb-9 pt-24 items-center">
        <div className="lg:pl-0 pl-4">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className=" text-4xl lg:text-5xl mad font-semibold"
          >
            WE EMPOWER YOU TO <br className="lg:flex hidden" /> MOVE COMFORTABLY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.1 }}
            className="lg:text-lg md:text-2xl text-base mt-7 "
          >
            At Athletics, we're about creating products that{" "}
            <br className="lg:flex hidden" /> amplify your workouts. Lorem ipsum
            dol amet, <br /> consectetur piscis rabitur cursus lectus por.
          </motion.p>
          <button className="py-3 px-4 mt-8 bg-black md:text-xl md:px-6 md:py-3 hover:opacity-80 text-white">
            Explore
          </button>
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0.2, y: -500 }}
            animate={{ opacity: 1, y: 0, rotateY: 50 }}
            transition={{ duration: 1.2 }}
            src="https://assets.website-files.com/61983c3a41be5bad7444a3c0/61f2e70177f8584393e77273_Image020%201.jpg"
            className="rotate-2 lg:w-[190px] md:w-[93vw]"
            width={480}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mt-20 lg:mt-8 md:mb-36 md:mt-20 mb-20 lg:mb-5 items-center">
        <div>
          <img
            src="https://assets.website-files.com/61983c3a41be5bad7444a3c0/61f2e7539d538babf0f423db_Image021%201.jpg"
            className="md:w-[93vw] lg:w-[480px]"
            width={480}
            alt=""
          />
        </div>
        <div className="pl-4 md:mt-16 lg:pl-0">
          <h3 className="mb-5 text-base lg:text-lg md:text-xl opacity-60">
            OUR FOUNDER
          </h3>
          <h1 className="lg:text-5xl text-4xl mad font-semibold">
            BEAUTY <br className="md:hidden flex" /> BEHIND{" "}
            <br className="md:hidden lg:flex" />
            THE MADNESS
          </h1>
          <p className="lg:text-lg md:text-2xl text-base mt-7 ">
            Rehan started this company in his room{" "}
            <br className="lg:flex hidden" /> apartment. Rabitur cursus ut
            lectus porta <br className="lg:flex hidden" /> placerat. Vamus quais
            facilisis nulla id dui <br className="lg:flex hidden" /> ague sellus
            portor.
          </p>
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
          <h1 className="lg:text-6xl md:text-5xl text-xl mb-6 font-semibold">
            "SUPERIOR TO OTHER <br /> ATHLETIC WEAR, GOING <br /> TO BUY MORE."
          </h1>
          <p className="lg:text-xl md:text-2xl text-sm opacity-90">
            JENNY HARLEM
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="lg:text-6xl text-xl md:text-5xl mb-6 font-semibold">
            "YOUR BIKER SHORTS <br /> ARE MY GO TO <br /> RUNNING WEAR EVERY{" "}
            <br /> DAY."
          </h1>
          <p className="lg:text-xl text-sm md:text-2xl opacity-90">
            SARAH CALSEY
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="lg:text-6xl text-xl md:text-5xl mb-6 font-semibold">
            "I'VE BOUGHT TWO <br /> PAIRS AND NOW I CAN'T <br /> LIVE WITHOUT
            THEM."
          </h1>
          <p className="lg:text-xl text-sm md:text-2xl opacity-90">
            EMILY COLSEN
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="lg:text-6xl text-xl md:text-5xl mb-6 font-semibold">
            "THE SHORTS WERE <br /> JUST WHAT I NEEDED <br /> TO GET ACTIVE{" "}
            <br /> OUTSIDE."
          </h1>
          <p className="lg:text-xl text-sm md:text-2xl opacity-90">
            TAYLOR FLUTTER
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default About;
