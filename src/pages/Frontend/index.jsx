import React from 'react'
import { Route, Routes } from 'react-router-dom'

//components
import Topbar from '../../components/Header/Topbar'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'

//pages
import Home from "./Home"
import SingleBook from './SingleBook'
import Category from './Category'
import Cart from './Cart'

export default function index() {
  return (
    <>
    <Topbar />
    <Navbar />
        <Routes>
                <Route path='/'>
                   <Route index element={<Home />} />
                   <Route path='/home' element={<Home />} />
                   <Route path='/category' element={<Category />} />
                   <Route path='/cart' element={<Cart />} />
                   <Route path='/singlebook/:id' element={<SingleBook />} />
                </Route>
        </Routes>
    <Footer />
    </>
  )
}
