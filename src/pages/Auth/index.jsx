import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from './SignIn'
import SignUp from './SignUp'
import ForgetPassword from './ForgetPassword'

export default function index() {
  return (
    <>
        <Routes>
                <Route  path='/signin' element={<SignIn />} />
                <Route  path='/signup' element={<SignUp />} />
                <Route  path='/forgotpassword' element={<ForgetPassword />} />
        </Routes>
    </>
  )
}
