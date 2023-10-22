import React from 'react'
import { Card } from 'antd';
import Stars from './Stars';
import { useNavigate } from 'react-router-dom';
export default function BookCard({book}) {
    const  navigate  = useNavigate()
  return (
    <>
        <Card hoverable={true} className='book-card mb-3' >
          <img src={book.image} alt="" width="100%" height="auto" onClick={()=>{navigate(`/singlebook/${book.id}`)}} />
          <p className='books'>{book.book}</p>
          <p className='author'>{book.author}</p>
          <Stars stars={book.rating} reviews={book.reviews} price={book.price} color="#ffc300" /> 
        </Card>
    </>
  )
}
