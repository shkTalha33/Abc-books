import React  from 'react';
import Books from './Books';
import "../scss/_best-selling-books.scss"
import { useCategoryContext } from '../context/CategoryContext';
export default function App() {
 
  const {all_Products} = useCategoryContext()
   const autplay = {
    delay: 2500,
    disableOnInteraction: false,
  }
  const navigation=true
  return (
    <>
      
      <div className="container px-1 py-5 px-md-5 mt-5">
        <div className="row mx-1">
            <div className="col">
              <Books document={all_Products} autoplay={autplay} navigation={navigation}/>
            </div>
        </div>
       </div>
      
    </>
  );
}
