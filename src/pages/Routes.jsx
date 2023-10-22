import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from "./Frontend"
import Auth from "./Auth"
import Dashboard from "./Dashboard/Admin"
import PrivateRoutes from '../Helper/PrivateRoutes'
import { useAuthContext } from '../context/AuthContext'


export default function Index() {
  const {authenticated,isAppLoading,user} = useAuthContext()

    const AdminUser = ({children}) =>{
         if (user.role === "admin") {
            return <>{children}</>
         }else{
          return <Navigate to="/" />
         }
    }
    // const NormalUser = ({children}) =>{
    //      if (user.role === "user") {
    //         return <>{children}</>
    //      }
    // }
  
  if (isAppLoading) {
    return <div className="appLoader d-flex vh-100 align-items-center justify-content-center">
       <div className="spinner-border" style={{height:50,width:50,color:"skyblue",borderRadius:"50%"}}></div>
    </div>
  }
  return (
    <>
     
       <Routes>

            <Route path='/*' element={<PrivateRoutes Component={Frontend} />} />
            <Route path='/auth/*' element={!authenticated ? <Auth /> : <Navigate to="/" /> } />
            <Route path='/dashboard/*' element={<AdminUser ><Dashboard /></AdminUser>} />

       </Routes>
    </>
  )
}
