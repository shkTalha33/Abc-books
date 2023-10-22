import React from 'react'
import {FaStar} from "react-icons/fa"
import {AiOutlineStar} from "react-icons/ai"
import {BsStarHalf} from "react-icons/bs"
import FormatPricing from './FormatPricing'

export default function Stars({stars,reviews,price,color}) {
    const rating = Array.from({length:5},(_,index)=>{
        let halfStar = index + 0.5
       return( 
         <span key={index} style={{fontSize:20,color:color}}>
            {stars >= index+1 ? <FaStar /> : stars >= halfStar ? <BsStarHalf /> : <AiOutlineStar/> }
         </span>
    )
    })
  return (
    <>
         <div className="book-footer">
            <div className="row d-flex align-items-center">
                <div className={price ? "col-7 col-md-8 col-lg-8" : "col-12 col-md-12 col-lg-12"}>
                {rating &&  <p className='ps-1 stars'>{rating}</p> }
                    {reviews && <p className='ps-1 reviews'><span style={{color:color}}>({reviews} </span>rewiews)</p> }
                </div>
                {price && 
                <div className="col-5 col-md-4 col-lg-4 price">
                  <FormatPricing  price={price} /> 
                </div>
                }
            </div>
         </div>
    </>
  )
}


