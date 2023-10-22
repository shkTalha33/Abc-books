import React from 'react'

// import { useAuthContext } from '../context/AuthContext'
// import { Navigate,useLocation} from 'react-router-dom'

export default function PrivateRoutes({Component}) {
    // const location = useLocation()
    // const {authenticated} = useAuthContext()
    // if (!authenticated) 
    //     return <Navigate to="/auth/signin" state={{from:location.pathname}} replace />
    
  return (
    <> 
       <Component />  
    </>
  )
}
