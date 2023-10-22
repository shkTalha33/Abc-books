import React,{useState} from 'react'
import ads from "../assets/pics/selling Books/ad.jpg"
import "../scss/_featured.scss"
import { useEffect } from 'react';
import SingleBookItem from "../components/SingleBookItem"
import { useCategoryContext } from '../context/CategoryContext';



export default function Featured() {

  const {all_Products} = useCategoryContext()
    const [featuredDocumnet, setFeaturedDocumnet] = useState([])
const autoplay={
      delay: 2000,
      disableOnInteraction: false,
    }
    const loop=true
    const navigation = true
    useEffect(() => {
       featuredBooks()
    }, [])
    const featuredBooks = async() => {
      
      const featuredItem = [...all_Products].filter((prod)=>{
         return prod.book === "DEAD SPACE"
      })
        setFeaturedDocumnet(featuredItem)
    }
  return (
    <>
    <div className="bg-white featured">
       <div className="container px-1 py-5 p-lg-5">
        <div className="row mx-0 mx-lg-2 ">
        <div className=" col-12 col-md-8 col-lg-9   ">
        <div className="featured-top">
        <span className='featured-week'>Featured This Week</span>  
            <span className='featured-veiw'>Veiw All</span>  
            </div>
            <div className="singleBook">
              <>
              {featuredDocumnet.map((doc,i)=>{
            return ( <SingleBookItem document={doc} key={i} autoplay={autoplay} loop={loop} navigation={navigation} button={"Veiw Details"} />)
            })}
              </>

            </div>
            </div>
   
            <div className="col-12 col-md-4 col-lg-3 ad">
                <img src={ads} className='img-fluid' alt="Ads image" height="88.5%" />

            </div>
        </div>
       </div>
    </div>
    </>
  )
}



