import React, { useState } from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'
export default function Navbar() {
    const {user} = useAuthContext()
  const [menu, setMenu] = useState(false)
  const [page, setPage] = useState("home")
  return (
    <>
        <div className=" abc-navbar">
        <div className="container px-0 ">
            <div className="row mx-0  mx-md-5">
                <div className="col px-0 me-0">
                <div className="hamburgerMenu d-flex justify-content-end d-md-none " onClick={()=>(setMenu(!menu))}>
                   <GiHamburgerMenu/>
                    </div>
                    <ul className={menu ? "showMenuItems":"menuItems"}>
                    <li><Link to="/" className={page === "home" ? "active anchor" :"anchor" } onClick={()=>setPage("home")}>Home</Link></li>
                    <li><Link to="category" className={page === "category" ? "active anchor"  : "anchor"} onClick={()=>setPage("category")}>Category</Link></li>
                    <li><Link to="cart" className={page === "cart" ? "active anchor"  : "anchor"} onClick={()=>setPage("cart")}>Cart</Link></li>
                   {user.role === "admin" ?
                        <li><Link to="dashboard/admin" className={page === "dashboard" ? "active anchor"  : "anchor"} onClick={()=>setPage("dashboard")}>Admin</Link></li>
                    :
                        null
                   }
                        <li>Pages</li>
                        <li>Contact</li>
                    </ul>
                   
                </div>
            </div>
        </div>       
        </div>
    </>
  )
}
