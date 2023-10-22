import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../../config/FirebaseConfig';
import SingleBookItem from "../../../components/SingleBookItem"
import "../../../scss/_singlebook.scss"
import RenderData from '../../../components/RenderData';
export default function SingleBook() {
const [document, setDocument] = useState({})
const [bookData, setBookData] = useState("bookdescription")
  const params =   useParams()



  const getBook = useCallback(async () => {

    onSnapshot(doc(firestore, "books", params.id), (doc) => {
        const data = doc.data();
        setDocument(data)
    })
}, [params.id])
  

 useEffect(() => {
     getBook()
  }, [getBook]
  )
  return (
    <>
    
       {/* {document &&  */}
           <div className="bg-light p-1 p-md-5 singlebook-container">
           <div className="conatiner mx-0 mx-md-5">
            <div className="row mx-0 mx-md-2">
              <div className="col px-0 px-md-3">
                
                  
                  <div className="row" >
                    <div className="col-md-12 singleBook">
                    <SingleBookItem document={document} autoplay={false} loop={false} navigation={false} button={"Add To Cart"} />
                    </div>        
                    </div>
                    <div className="row py-5 px-1 px-lg-5">
                    <div className="col-md-12  button-section">
                          <button className={bookData === "bookdescription" ? "active-btn btn btn-outline" : "button btn btn-outline"} onClick={()=>{setBookData("bookdescription")}}>Description</button>
                          <button className={bookData === "authordescription" ? "active-btn btn btn-outline" : "button btn btn-outline"}  onClick={()=>{setBookData("authordescription")}}>Author</button>
                          <button className={bookData === "bookreviews" ? "active-btn btn btn-outline" : "button btn btn-outline"}  onClick={()=>{setBookData("bookreviews")}}>Comment</button>
                          <button className={bookData === "bookcomment" ? "active-btn btn btn-outline" : "button btn btn-outline"}  onClick={()=>{setBookData("bookcomment")}}>Review</button>
                      </div>
                    </div>
                    <div className="row pt-0 pt-md-3 pb-5 px-3 px-lg-5">
                    <div className="col-md-12  data-section">
                        <RenderData document={document} clicked={bookData}  /> 
                      </div>
                    </div>
                  </div>
              
                  
              </div>
            </div>
           </div>
       {/* } */}
       
    </>
  )
}
