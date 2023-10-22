import React from 'react'
import Logo from "../../assets/pics/logo/logo.png"
import {BsCart} from "react-icons/bs"
import {SearchOutlined} from "@ant-design/icons"
import { signOut } from "firebase/auth"
import { useAuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { auth } from '../../config/FirebaseConfig'

export default function Navbar() {
    const navigate = useNavigate()
    const {authenticated,dispatch} = useAuthContext()
    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            message.success("Sign Out successfully");
            dispatch({ type: "SET_LOGGED_OUT" });
            navigate("/auth/signin");
          })
          .catch((err) => {
            message.error("Please try again to signOut");
          });
      };
    const handleLogin = () => {
       navigate("/auth/signin")

    }
  return (
    <>
        <header className='abc-topBar  py-4'>
            <div className="container ">
                <div className="row mx-1 mx-md-5 d-flex align-items-center">
                    <div className="col-lg-2 mb-2 mb-lg-0 me-4">
                       <img src={Logo} alt="Abc Logo" width={150} />
                    </div>
                    <div className="col-lg-5">
                         <div className="searchBar mb-3 mb-lg-0">
                             <form>
                                <input placeholder='Search by Author Name or Publisher'/>
                                <SearchOutlined />
                             </form>
                         </div>
                    </div>
                    <div className="col-lg-4 nav-right ">
                        <p >FAQ</p>
                        <p >Track Order</p>
                        <div >
                            <span  className='cart '>
                              <BsCart />
                         
                           <span className='cartValue'>
                               1
                           </span>
                           </span>
                        </div>
                
                   {!authenticated ?  
                        <button className='btn nav-btn' onClick={handleLogin}>Sign In</button>
                        :
                        <button className='btn nav-btn' onClick={handleLogout}>Logout</button>
                    }
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}
