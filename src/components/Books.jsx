import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Autoplay,Navigation} from 'swiper/modules';
import BookCard from './BookCard';

export default function Books({document,autoplay,navigation}) {
  return (
    <>
          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={navigation}
        autoplay={autoplay}
      
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation:false
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 5,
            spaceBetween: 50,
            
          },
        }}
        modules={[Autoplay,Navigation]}
        className="mySwiper">
 
        {document.map((book,i)=>{
          return(  <SwiperSlide  key={i} style={{ cursor: 'pointer'}}>
                         <BookCard book={book} />
                   </SwiperSlide>
         )
       })}
     

      </Swiper>
    </>
  )
}
