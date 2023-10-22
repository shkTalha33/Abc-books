import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import Stars from './Stars';
import "../scss/_SingleBookItem.scss"
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
export default function SingleBook({autoplay,loop,document,navigation,button}) {
  const {getCartItems} = useCartContext()
const naviagte = useNavigate()
const handleCart = () => {
  naviagte("/cart")
  getCartItems(document)
}
  return (
    <>
       
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={loop}
        centeredSlides={false}
        autoplay={autoplay}
      
        navigation={navigation}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      > 
           <SwiperSlide  className='singleBook'>
      
            <div className='featured-section d-lg-flex p-3 p-md-5 text-white '>
            <img src={document.image} className='col-12  ms-0 ps-0' alt="Babel image" width="100%" />    
            <div className="book-data col-12 d-flex ps-0 ps-lg-3 justify-content-center align-items-start  flex-column">
            <h1 style={{fontFamily:"serif"}}>{document.book}</h1>
             <p style={{fontSize:13}}>{document.author}</p>
             <Stars stars={document.rating} reviews={document.reviews}  color="white"/> 
             {button === "Add To Cart" ?
               <button className='btn btn-outline-light' style={{borderRadius:25,padding:" 15px 25px" }} onClick={handleCart}>{button}</button>
               :
               <button className='btn btn-outline-light' style={{borderRadius:25,padding:" 15px 25px" }}>{button}</button>
            }
             
            </div>
            </div>
           </SwiperSlide>
            
        
      </Swiper>
      
    </>
  )
}
