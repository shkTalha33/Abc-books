import React  from 'react';
import { motion } from "framer-motion"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';



// import required modules
import {Autoplay, EffectFade,  Pagination } from 'swiper/modules';

export default function HeroCarosal() {
    const imgVarrient = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delayChildren:2,
                staggerChildren:"beforeChildren",
                duration:2
            }
        }
    }
    const textvarrient={
        hidden:{
            y:100,
            opacity:0
        },
        visible:{
            y:0,
            opacity:1,
           
        }
    }
  return (
    <>
      <div className="container abc-swiper">
        <div className="row mx-md-5 ">
            <div className="col-md-12 w-100 px-0">
            <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          draggable={true}
        pagination={{
            className:"pagination",
          clickable: true,
        }}
        modules={[Autoplay,EffectFade,  Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='img-1 img'> 
           <motion.div     className="img-text">
           <motion.div variants={textvarrient}  className="fiction-badge">
                <p>Sceince Fiction</p>
            </motion.div>
                <h1 >The History <br /> Of Philopinos</h1>
                <button className='btn browser-btn'>Browser</button>
           </motion.div>
        </SwiperSlide>
        <SwiperSlide className='img-2 img'>
        <motion.div className="img-text">
           <motion.div   className="fiction-badge">
                <p>Sceince Fiction</p>
            </motion.div>
                <motion.h1  >The History <br /> Of Philopinos</motion.h1>
                <motion.button   className='btn browser-btn'>Browser</motion.button>
           </motion.div>
        </SwiperSlide>
        <SwiperSlide className='img-3'>
        <div className="img-text">
           <div className="fiction-badge">
                <p>Sceince Fiction</p>
              </div>
                <h1 >The History <br /> Of Philopinos</h1>
                <button className='btn browser-btn'>Browser</button>
              </div>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
      </div>
    </>
  );
}
