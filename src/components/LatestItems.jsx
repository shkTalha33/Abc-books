import React, {  useState } from 'react'
import Button from './Button'


import "../scss/_LatestItems.scss"
import Books from './Books';
import { useCategoryContext } from '../context/CategoryContext';

export default function LatestItems() {

  const {all_Products} = useCategoryContext()
    const [category, setCategory] = useState("all")
    const autoplay= false
    const navigation= false
    
  return (
    <>
       <div className="bg-white px-0 py-5 p-lg-5 latest">
          <div className="container">
            <div className="row mx-0 mx-lg-5">
                <div className="col">
                   <div className="row d-flex  align-items-center">
                    <div className="col-12 col-lg-6 ">
                        <h3 className='latest-text'>Latest Published items</h3>
                    </div>
                    <div className="col-12 col-lg-6 buttons   d-md-flex justify-content-start  d-lg-flex justify-content-lg-end">
                        <span className={category === "all" ? "active-btn mb-2" : "latest-button mb-2"}  onClick={()=>{setCategory("all")}}><Button category="All"   /></span>
                        <span className={category === "horror" ? "active-btn mb-2" : "latest-button mb-2"} onClick={()=>{setCategory("horror")}}><Button category="Horror"  /></span>
                        <span className={category === "science" ? "active-btn mb-2" : "latest-button mb-2"} onClick={()=>{setCategory("science")}}><Button category="Science Fiction"/></span>
                        <span className={category === "history" ? "active-btn mb-2" : "latest-button mb-2"} onClick={()=>{setCategory("history")}}><Button category="History"  /></span>
                        <span className={category === "triller" ? "active-btn mb-2" : "latest-button mb-2"} onClick={()=>{setCategory("triller")}}><Button category="Triller"  /></span>
                       
                    </div>
                   </div>
                   <div className="row mt-4">
                    <div className="col-12 latest-books">
                        {!all_Products ? 
                        <div className="spinner-border" style={{height:50,width:50,borderRadius:"50%",backgroundColor:"skyblue"}}>

                        </div>
                        :
                    <Books document={all_Products} autoplay={autoplay} navigation={navigation} />
                       }
                    </div>
                   </div>
                </div>
            </div>
          </div>
       </div>
    </>
  )
}


