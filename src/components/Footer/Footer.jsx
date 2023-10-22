import React from 'react'
import Logo from "../../assets/pics/logo/logo.png"
import {BsFacebook,BsYoutube,BsInstagram} from "react-icons/bs"
import {FaLinkedinIn} from "react-icons/fa"
export default function Footer() {
  return (
    <>
       <footer>
         <div className="container py-3  py-md-5  footer">
            <div className="row mx-md-5 d-flex justify-conetnt-between">
              <div className="col-md-12 mb-5 newletter py-3">
                <div className="col-10 col-md-6 ">
                <h1 className="mt-5 mb-4">
                     Join Newsletter
                 </h1>
                 <p>
                 Lorem started its journey with cast iron (CI) products in 1980. The initial main objective was to ensure pure water and affordable irrigation.
                 </p>
                 <form className='mb-5 mt-3'>
                    <input type="email" placeholder='Enter your Email' />
                    <button className='mt-2'>Subscribe</button>
                 </form>
                </div>
              </div>
                <div className=" col-md-4  mb-3">
                    <img src={Logo} alt="" />
                    <p className='my-4 col-10'>Get the breathing space now, and we’ll extend your term at the other end year for go.</p>
                    <div className="socail-icons d-flex justify-content-around col-8">
                    <span >
                     <BsFacebook />
                     </span>
                     <span >
                     <BsInstagram />
                     </span>
                     <span >
                     <FaLinkedinIn />
                     </span>
                     <span >
                     <BsYoutube />
                     </span>
                    </div>
                   
                </div>
                <div className="col-4 col-md-3 book-category-1">
                    <h5 className=' fs-6 '>Book Category</h5>
                    <p className='mt-4'>History</p>
                    <p>Horror - Thriller</p>
                    <p>Love Stories</p>
                    <p>Science Fiction</p>
                    <p>Business</p>
                </div>
                <div className="col-4 col-md-3 mt-4 book-category-2">
                <p className='mt-5 mt-md-4'>Biography</p>
                    <p>Astrology</p>
                    <p>Digital Marketing</p>
                    <p>Software Development</p>
                    <p>Ecommerce</p>
                </div>
                <div className="col-4 col-md-2 site-category">
                    <h5 className=' fs-6 '>Site Map</h5>
                    <p className='mt-5 mt-md-4'>Home</p>
                    <p>About</p>
                    <p>FAQ</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </div>
         </div>
       </footer>
    </>
  )
}
